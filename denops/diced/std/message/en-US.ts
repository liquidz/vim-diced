export const Translation = {
  Enabled: "<%= name %>: Enabled.",
  Disabled: "<%= name %>: Disabled.",
  AliasExists: 'Alias "%s" already exists.',
  AllNsLoading: "Loading all namespaces...",
  AllReloaded: "All reloaded.",
  AlreadyClean: "Already clean.",
  AlreadyConnected: "Already connected.",
  AlreadyInTestNs: "Already in test namespace.",
  AlreadyRunning: "Already running.",
  ArgumentMissing: "Argument missing: %s",
  AutoConnect: "Auto connecting...",
  CacheCleared: "Cache cleared.",
  Canceled: "Cancelled.",
  CanceledCljsRepl: "Cancelled starting the CLJS repl.",
  ClassExists: 'Class "%s" already exists.',
  Cleaned: "Cleaned.",
  Cleared: "Cleared.",
  CljKondoAnalyzing: "Analyzing yet. Do you want to proceed? (Y/n): ",
  ClojuredocsCljsError:
    'Tried searching for "%s", but ClojureDocs does not have docs for ClojureScript.',
  ClojuredocsNotFound: 'Cannot find "%s" in ClojureDocs.',
  ComponentError: "Failed to start component: %s.",
  ConfirmInstallation: "Do you want to install `%s` to %s? (Y/n): ",
  ConfirmOpeningFile: "Open this file?",
  ConfirmProceeding: "Do you want to proceed? (Y/n): ",
  ConnectError: "Failed to connect.",
  Connected: "Connected.",
  ConnectedTo: "Connected to %s.",
  Connecting: "Connecting...",
  DeleteError: "Failed to delete.",
  Deleted: 'Deleted "%s".',
  Disconnected: "Disconnected.",
  FailedToInstall: "Failed to install: %s.",
  FailedToRefresh: "Failed to refresh %s: %s.",
  Fallback: "Fallback to <%= name %>",
  Fetching: "Fetching...",
  FetchingNsAliases: "Fetching existing ns aliases...",
  FetchingPseudoNsPath: "Fetching pseudo ns path...",
  FindingCodeError: "Failed to find code.",
  FindingVarReferences: "Finding var references...",
  FinishToGrep: "Finished grepping: %s",
  FinishToInstall: "Finish installing: %s",
  FinishToRefresh: "Finish refreshing %s.",
  GrepNotFound: 'Didn\'t find "%s" in this project.',
  HitVarReferenceCache: "Hit var references cache.",
  Interrupted: "Interrupted.",
  InvalidCljsEnv: "Invalid CLJS environment.",
  InvalidFormat: "Invalid format: %s.",
  InvalidHook: 'Hook setting must contain "type" and "exec".',
  InvalidHookExec: "Hook exec setting is invalid: %s.",
  InvalidSession: "Session error. You should be in %s session.",
  JumpError: 'Failed to jump: "%s".',
  JumpNotFound:
    "Not found. Target namespace may not be loaded. Try :IcedRequireAll.",
  MissingConfig:
    "Some dependencies or middlewares is missing. It will be the cause of malfunction.",
  NoCandidates: "No candidates.",
  NoDocument: "Not documented.",
  NoIcedNrepl:
    "iced-nrepl is not enabled. Please launch repl with the `iced repl` command.",
  NoInstaller: "No installer for %s.",
  NoLastUseCases: "No last use cases.",
  NoMoreUseCases: "No more use cases.",
  NoPiggieback:
    "Piggieback is not enabled. Please launch repl with `iced repl --with-cljs` command.",
  NoPortFile: ".nrepl-port was not found.",
  NoSelector:
    "CtrlP, Fzf or vim-clap needed to select candidates is not installed.",
  NoSession: "Session does not exist: %s.",
  NoSpec: "No spec form is found.",
  NoTestSummary: "No tests to run.",
  NoTestVars: "No test vars.",
  NoTestVarsFor: "No test vars for %s.",
  NoVarReferences: "No %s/%s references.",
  NotConnected: "Not connected.",
  NotExecutable: '"%s" is not executable.',
  NotFound: "Not found.",
  NotInstalledByIced: '"%s" is not installed by vim-iced.',
  NotSupported: "Not supported.",
  NsAdded: "Added %s.",
  NsAddedAs: 'Added %s as "%s".',
  NsListError: "Failed to fetch ns list.",
  NsNotFound: "(ns ..) form is not found.",
  NsVarsError: "Failed to fetch ns vars.",
  PopupError: "Failed to open popup: %s.",
  ProvidedSideloader: "Provided %s as %s to sideloader.",
  QuittedCljsRepl: "CLJS repl has quit.",
  Reading: "Still reading..",
  Required: "Required.",
  RequiredToInstall: "`%s` is required to proceed process.",
  ResolvingMissing: "Resolving...",
  Retesting: "Re-testing...",
  SearchHitBottom: "search hit BOTTOM, continuing at TOP...",
  SearchHitTop: "search hit TOP, continuing at BOTTOM...",
  SignNotFound: "Sign is not found.",
  SpecCheckError: "Failed to check spec.",
  SpecFormError: "Failed to fetch spec form.",
  SpecListError: "Failed to fetch spec list.",
  StartToGrep: "Start to grep: %s",
  StartToInstall: "Start to install: %s.",
  StartToRefresh: "Start to refresh %s...",
  StartToTrace: "Start to trace: %s.",
  StartedCljsRepl: "CLJS repl has started.",
  StartedSideloader: "Sideloader has started.",
  StopToTrace: "Stop to trace: %s.",
  StoppedSideloader: "Sideloader has stopped.",
  TestSummary:
    "<%= nsName %>: Ran <%= testCount %> assertions, in <%= varCount %> test functions. <%= failCount %> failures, <%= errorCount %> errors.",
  Testing: "Testing...",
  TestingVar: "Testing: <%= varName %>",
  Timeout: "Timed out.",
  ToggleWarnOnReflection: "Toggled *warn-on-reflection* to %s.",
  TooDeepToSlurp: "Too deep to slurp.",
  TooLargeValues: "Timed out because evaluated values are too large.",
  TryConnect: "Not connected. Try `:IcedConnect <port>`",
  Unaliased: 'Unaliased "%s".',
  Undefined: "Undefined %s.",
  UnexpectedError: "Unexpected error: <%= message %>",
  Unknown: '"%s" is unknown.',
  UnknownHookType: 'Hook type "%s" is unknown or not supported.',
  Untraced: "Untraced.",
  UsedLocalsError: "Failed to fetch used-locals: %s.",
  VarReferencesFound: "Found %d references.",
  WaitAMinute: "Wait a minute. It may take some time.",
};
