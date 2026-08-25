import { computed, ref } from 'vue';

export type FlowQuestion = {
  id: string;
  [key: string]: unknown;
};

export type QuestionFlowOptions = {
  /** Whether navigating between questions updates the URL query. Defaults to true. */
  syncUrl?: boolean;
  /** Query param name used to store the current question id. Defaults to 'question'. */
  urlParam?: string;
};

const isAnswered = (value: unknown) =>
  value !== undefined && value !== null && value !== '' && (!Array.isArray(value) || value.length > 0);

/** Drives a sequence of taxonomy questions: tracks answers, allows skipping already-answered ones, optional URL sync. */
export const useQuestionFlow = (questions: FlowQuestion[], options: QuestionFlowOptions = {}) => {
  const urlParam = options.urlParam ?? 'question';
  const urlSyncEnabled = ref(options.syncUrl ?? true);

  const router = useRouter();
  const route = useRoute();

  const answers = useState<Record<string, unknown>>('question-flow-answers', () => ({}));

  const indexFromUrl = () => {
    if (!urlSyncEnabled.value) return 0;
    const index = questions.findIndex((question) => question.id === route.query[urlParam]);
    return index === -1 ? 0 : index;
  };

  const currentIndex = ref(indexFromUrl());

  const currentQuestion = computed(() => questions[currentIndex.value]);
  const isFirst = computed(() => currentIndex.value <= 0);
  const isLast = computed(() => currentIndex.value >= questions.length - 1);
  const isComplete = computed(() => currentIndex.value >= questions.length);

  const hasAnswer = (questionId: string) => isAnswered(answers.value[questionId]);
  const getAnswer = (questionId: string) => answers.value[questionId];
  const setAnswer = (questionId: string, value: unknown) => {
    answers.value = { ...answers.value, [questionId]: value };
  };

  const canSkipCurrent = computed(() => {
    const question = currentQuestion.value;
    return !!question && hasAnswer(question.id);
  });

  const syncUrl = () => {
    if (!urlSyncEnabled.value) return;
    const question = currentQuestion.value;
    const query = { ...route.query };
    if (question) query[urlParam] = question.id;
    else delete query[urlParam];
    router.replace({ query });
  };

  const goToIndex = (index: number) => {
    currentIndex.value = Math.min(Math.max(index, 0), questions.length);
    syncUrl();
  };

  const goNext = () => goToIndex(currentIndex.value + 1);
  const goPrevious = () => goToIndex(currentIndex.value - 1);

  /** Saves the answer for the current question and advances to the next one. */
  const answerCurrent = (value: unknown) => {
    const question = currentQuestion.value;
    if (!question) return;
    setAnswer(question.id, value);
    goNext();
  };

  /** Advances past the current question without touching its answer; only allowed once it is already answered. */
  const skipCurrent = () => {
    if (!canSkipCurrent.value) return false;
    goNext();
    return true;
  };

  /** Toggles whether the current question id is reflected in the URL query. */
  const setUrlSyncEnabled = (enabled: boolean) => {
    urlSyncEnabled.value = enabled;
    if (enabled) syncUrl();
  };

  const reset = () => {
    answers.value = {};
    goToIndex(0);
  };

  return {
    questions,
    answers,
    currentIndex,
    currentQuestion,
    isFirst,
    isLast,
    isComplete,
    urlSyncEnabled,
    canSkipCurrent,
    hasAnswer,
    getAnswer,
    setAnswer,
    answerCurrent,
    skipCurrent,
    goNext,
    goPrevious,
    goToIndex,
    setUrlSyncEnabled,
    reset
  };
};
