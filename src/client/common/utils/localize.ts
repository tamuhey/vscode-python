// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import * as fs from 'fs';
import * as path from 'path';
import { EXTENSION_ROOT_DIR } from '../../constants';

// External callers of localize use these tables to retrieve localized values.
export namespace Diagnostics {
    export const warnSourceMaps = localize('diagnostics.warnSourceMaps', 'Source map support is enabled in the Python Extension, this will adversely impact performance of the extension.');
    export const disableSourceMaps = localize('diagnostics.disableSourceMaps', 'Disable Source Map Support');
    export const warnBeforeEnablingSourceMaps = localize('diagnostics.warnBeforeEnablingSourceMaps', 'Enabling source map support in the Python Extension will adversely impact performance of the extension.');
    export const enableSourceMapsAndReloadVSC = localize('diagnostics.enableSourceMapsAndReloadVSC', 'Enable and reload Window.');
    export const lsNotSupported = localize('diagnostics.lsNotSupported', 'Your operating system does not meet the minimum requirements of the Language Server. Reverting to the alternative, Jedi.');
    export const invalidPythonPathInDebuggerSettings = localize('diagnostics.invalidPythonPathInDebuggerSettings', 'You need to select a Python interpreter before you start debugging.\n\nTip: click on "Select Python Interpreter" in the status bar.');
    export const invalidPythonPathInDebuggerLaunch = localize('diagnostics.invalidPythonPathInDebuggerLaunch', 'The Python path in your debug configuration is invalid.');
}

export namespace Common {
    export const canceled = localize('Common.canceled', 'Canceled');
    export const loadingExtension = localize('Common.loadingPythonExtension', 'Python extension loading...');
    export const openOutputPanel = localize('Common.openOutputPanel', 'Show output');
}

export namespace LanguageService {
    export const bannerMessage = localize('LanguageService.bannerMessage', 'Can you please take 2 minutes to tell us how the Python Language Server is working for you?');
    export const bannerLabelYes = localize('LanguageService.bannerLabelYes', 'Yes, take survey now');
    export const bannerLabelNo = localize('LanguageService.bannerLabelNo', 'No, thanks');
    export const lsFailedToStart = localize('LanguageService.lsFailedToStart', 'We encountered an issue starting the Language Server. Reverting to the alternative, Jedi. Check the Python output panel for details.');
    export const lsFailedToDownload = localize('LanguageService.lsFailedToDownload', 'We encountered an issue downloading the Language Server. Reverting to the alternative, Jedi. Check the Python output panel for details.');
    export const lsFailedToExtract = localize('LanguageService.lsFailedToExtract', 'We encountered an issue extracting the Language Server. Reverting to the alternative, Jedi. Check the Python output panel for details.');
    export const downloadFailedOutputMessage = localize('LanguageService.downloadFailedOutputMessage', 'download failed.');
    export const extractionFailedOutputMessage = localize('LanguageService.extractionFailedOutputMessage', 'extraction failed.');
    export const extractionCompletedOutputMessage = localize('LanguageService.extractionCompletedOutputMessage', 'complete.');
    export const extractionDoneOutputMessage = localize('LanguageService.extractionDoneOutputMessage', 'done.');
    export const reloadVSCodeIfSeachPathHasChanged = localize('LanguageService.reloadVSCodeIfSeachPathHasChanged', 'Search paths have changed for this Python interpreter. Please reload the extension to ensure that the IntelliSense works correctly.');

}

export namespace Interpreters {
    export const loading = localize('Interpreters.LoadingInterpreters', 'Loading Python Interpreters');
    export const refreshing = localize('Interpreters.RefreshingInterpreters', 'Refreshing Python Interpreters');
}

export namespace Linters {
    export const installedButNotEnabled = localize('Linter.InstalledButNotEnabled', 'Linter {0} is installed but not enabled.');
    export const replaceWithSelectedLinter = localize('Linter.replaceWithSelectedLinter', 'Multiple linters are enabled in settings. Replace with \'{0}\'?');
}

export namespace InteractiveShiftEnterBanner {
    export const bannerMessage = localize('InteractiveShiftEnterBanner.bannerMessage', 'Would you like shift-enter to send code to the new Interactive Window experience?');
    export const bannerLabelYes = localize('InteractiveShiftEnterBanner.bannerLabelYes', 'Yes');
    export const bannerLabelNo = localize('InteractiveShiftEnterBanner.bannerLabelNo', 'No');
}

export namespace DataScienceSurveyBanner {
    export const bannerMessage = localize('DataScienceSurveyBanner.bannerMessage', 'Can you please take 2 minutes to tell us how the Python Data Science features are working for you?');
    export const bannerLabelYes = localize('DataScienceSurveyBanner.bannerLabelYes', 'Yes, take survey now');
    export const bannerLabelNo = localize('DataScienceSurveyBanner.bannerLabelNo', 'No, thanks');
}

export namespace DataScience {
    export const historyTitle = localize('DataScience.historyTitle', 'Python Interactive');
    export const dataExplorerTitle = localize('DataScience.dataExplorerTitle', 'Data Viewer');
    export const badWebPanelFormatString = localize('DataScience.badWebPanelFormatString', '<html><body><h1>{0} is not a valid file name</h1></body></html>');
    export const sessionDisposed = localize('DataScience.sessionDisposed', 'Cannot execute code, session has been disposed.');
    export const unknownMimeTypeFormat = localize('DataScience.unknownMimeTypeFormat', 'Mime type {0} is not currently supported');
    export const exportDialogTitle = localize('DataScience.exportDialogTitle', 'Export to Jupyter Notebook');
    export const exportDialogFilter = localize('DataScience.exportDialogFilter', 'Jupyter Notebooks');
    export const exportDialogComplete = localize('DataScience.exportDialogComplete', 'Notebook written to {0}');
    export const exportDialogFailed = localize('DataScience.exportDialogFailed', 'Failed to export notebook. {0}');
    export const exportOpenQuestion = localize('DataScience.exportOpenQuestion', 'Open in browser');
    export const runCellLensCommandTitle = localize('python.command.python.datascience.runcell.title', 'Run cell');
    export const importDialogTitle = localize('DataScience.importDialogTitle', 'Import Jupyter Notebook');
    export const importDialogFilter = localize('DataScience.importDialogFilter', 'Jupyter Notebooks');
    export const notebookCheckForImportTitle = localize('DataScience.notebookCheckForImportTitle', 'Do you want to import the Jupyter Notebook into Python code?');
    export const notebookCheckForImportYes = localize('DataScience.notebookCheckForImportYes', 'Import');
    export const notebookCheckForImportNo = localize('DataScience.notebookCheckForImportNo', 'Later');
    export const notebookCheckForImportDontAskAgain = localize('DataScience.notebookCheckForImportDontAskAgain', 'Don\'t Ask Again');
    export const jupyterNotSupported = localize('DataScience.jupyterNotSupported', 'Jupyter is not installed');
    export const jupyterNotSupportedBecauseOfEnvironment = localize('DataScience.jupyterNotSupportedBecauseOfEnvironment', 'Activating {0} to run Jupyter failed with {1}');
    export const jupyterNbConvertNotSupported = localize('DataScience.jupyterNbConvertNotSupported', 'Jupyter nbconvert is not installed');
    export const jupyterLaunchTimedOut = localize('DataScience.jupyterLaunchTimedOut', 'The Jupyter notebook server failed to launch in time');
    export const jupyterLaunchNoURL = localize('DataScience.jupyterLaunchNoURL', 'Failed to find the URL of the launched Jupyter notebook server');
    export const pythonInteractiveHelpLink = localize('DataScience.pythonInteractiveHelpLink', 'See [https://aka.ms/pyaiinstall] for help on installing jupyter.');
    export const importingFormat = localize('DataScience.importingFormat', 'Importing {0}');
    export const startingJupyter = localize('DataScience.startingJupyter', 'Starting Jupyter server');
    export const connectingToJupyter = localize('DataScience.connectingToJupyter', 'Connecting to Jupyter server');
    export const exportingFormat = localize('DataScience.exportingFormat', 'Exporting {0}');
    export const runAllCellsLensCommandTitle = localize('python.command.python.datascience.runallcells.title', 'Run all cells');
    export const runAllCellsAboveLensCommandTitle = localize('python.command.python.datascience.runallcellsabove.title', 'Run Above');
    export const runCellAndAllBelowLensCommandTitle = localize('python.command.python.datascience.runcellandallbelow.title', 'Run Below');
    export const importChangeDirectoryComment = localize('DataScience.importChangeDirectoryComment', '#%% Change working directory from the workspace root to the ipynb file location. Turn this addition off with the DataScience.changeDirOnImportExport setting');
    export const exportChangeDirectoryComment = localize('DataScience.exportChangeDirectoryComment', '# Change directory to VSCode workspace root so that relative path loads work correctly. Turn this addition off with the DataScience.changeDirOnImportExport setting');

    export const restartKernelMessage = localize('DataScience.restartKernelMessage', 'Do you want to restart the Jupter kernel? All variables will be lost.');
    export const restartKernelMessageYes = localize('DataScience.restartKernelMessageYes', 'Restart');
    export const restartKernelMessageNo = localize('DataScience.restartKernelMessageNo', 'Cancel');
    export const restartingKernelStatus = localize('DataScience.restartingKernelStatus', 'Restarting iPython Kernel');
    export const restartingKernelFailed = localize('DataScience.restartingKernelFailed', 'Kernel restart failed. Jupyter server is hung. Please reload VS code.');
    export const interruptingKernelFailed = localize('DataScience.interruptingKernelFailed', 'Kernel interrupt failed. Jupyter server is hung. Please reload VS code.');

    export const executingCode = localize('DataScience.executingCode', 'Executing Cell');
    export const collapseAll = localize('DataScience.collapseAll', 'Collapse all cell inputs');
    export const expandAll = localize('DataScience.expandAll', 'Expand all cell inputs');
    export const exportKey = localize('DataScience.export', 'Export as Jupyter Notebook');
    export const restartServer = localize('DataScience.restartServer', 'Restart iPython Kernel');
    export const undo = localize('DataScience.undo', 'Undo');
    export const redo = localize('DataScience.redo', 'Redo');
    export const clearAll = localize('DataScience.clearAll', 'Remove All Cells');
    export const pythonVersionHeader = localize('DataScience.pythonVersionHeader', 'Python Version:');
    export const pythonRestartHeader = localize('DataScience.pythonRestartHeader', 'Restarted Kernel:');
    export const pythonNewHeader = localize('DataScience.pythonNewHeader', 'Started new kernel:');
    export const pythonVersionHeaderNoPyKernel = localize('DataScience.pythonVersionHeaderNoPyKernel', 'Python Version may not match, no ipykernel found:');

    export const jupyterSelectURILaunchLocal = localize('DataScience.jupyterSelectURILaunchLocal', 'Launch local Jupyter server');
    export const jupyterSelectURISpecifyURI = localize('DataScience.jupyterSelectURISpecifyURI', 'Type in the URI for the Jupyter server');
    export const jupyterSelectURIPrompt = localize('DataScience.jupyterSelectURIPrompt', 'Enter the URI of a Jupyter server');
    export const jupyterSelectURIInvalidURI = localize('DataScience.jupyterSelectURIInvalidURI', 'Invalid URI specified');
    export const jupyterNotebookFailure = localize('DataScience.jupyterNotebookFailure', 'Jupyter notebook failed to launch. \r\n{0}');
    export const jupyterNotebookConnectFailed = localize('DataScience.jupyterNotebookConnectFailed', 'Failed to connect to Jupyter notebook. \r\n{0}\r\n{1}');
    export const jupyterNotebookRemoteConnectFailed = localize('DataScience.jupyterNotebookRemoteConnectFailed', 'Failed to connect to remote Jupyter notebook.\r\nCheck that the Jupyter Server URI setting has a valid running server specified.\r\n{0}\r\n{1}');
    export const jupyterServerCrashed = localize('DataScience.jupyterServerCrashed', 'Jupyter server crashed. Unable to connect. \r\nError code from jupyter: {0}');
    export const notebookVersionFormat = localize('DataScience.notebookVersionFormat', 'Jupyter Notebook Version: {0}');
    //tslint:disable-next-line:no-multiline-string
    export const jupyterKernelNotSupportedOnActive = localize('DataScience.jupyterKernelNotSupportedOnActive', `iPython kernel cannot be started from '{0}'. Using closest match {1} instead.`);
    export const jupyterKernelSpecNotFound = localize('DataScience.jupyterKernelSpecNotFound', 'Cannot create a iPython kernel spec and none are available for use');
    export const interruptKernel = localize('DataScience.interruptKernel', 'Interrupt iPython Kernel');
    export const interruptKernelStatus = localize('DataScience.interruptKernelStatus', 'Interrupting iPython Kernel');
    export const exportCancel = localize('DataScience.exportCancel', 'Cancel');
    export const restartKernelAfterInterruptMessage = localize('DataScience.restartKernelAfterInterruptMessage', 'Interrupting the kernel timed out. Do you want to restart the kernel instead? All variables will be lost.');
    export const pythonInterruptFailedHeader = localize('DataScience.pythonInterruptFailedHeader', 'Keyboard interrupt crashed the kernel. Kernel restarted.');
    export const sysInfoURILabel = localize('DataScience.sysInfoURILabel', 'Jupyter Server URI: ');
    export const executingCodeFailure = localize('DataScience.executingCodeFailure', 'Executing code failed : {0}');
    export const inputWatermark = localize('DataScience.inputWatermark', 'Shift-enter to run');
    export const liveShareConnectFailure = localize('DataScience.liveShareConnectFailure', 'Cannot connect to host jupyter session. URI not found.');
    export const liveShareCannotSpawnNotebooks = localize('DataScience.liveShareCannotSpawnNotebooks', 'Spawning jupyter notebooks is not supported over a live share connection');
    export const liveShareCannotImportNotebooks = localize('DataScience.liveShareCannotImportNotebooks', 'Importing notebooks is not currently supported over a live share connection');
    export const liveShareHostFormat = localize('DataScience.liveShareHostFormat', '{0} Jupyter Server');
    export const liveShareSyncFailure = localize('DataScience.liveShareSyncFailure', 'Synchronization failure during live share startup.');
    export const liveShareServiceFailure = localize('DataScience.liveShareServiceFailure', 'Failure starting \'{0}\' service during live share connection.');
    export const documentMismatch = localize('DataScience.documentMismatch', 'Cannot run cells, duplicate documents for {0} found.');
    export const jupyterGetVariablesBadResults = localize('DataScience.jupyterGetVariablesBadResults', 'Failed to fetch variable info from the Jupyter server.');
    export const dataExplorerInvalidVariableFormat = localize('DataScience.dataExplorerInvalidVariableFormat', '\'{0}\' is not an active variable.');
    export const pythonInteractiveCreateFailed = localize('DataScience.pythonInteractiveCreateFailed', 'Failure to create a \'Python Interactive\' window. Try reinstalling the Python extension.');
    export const jupyterGetVariablesExecutionError = localize('DataScience.jupyterGetVariablesExecutionError', 'Failure during variable extraction: \r\n{0}');
    export const loadingMessage = localize('DataScience.loadingMessage', 'loading ...');
    export const noRowsInDataExplorer = localize('DataScience.noRowsInDataExplorer', 'Fetching data ...');
    export const pandasTooOldForViewingFormat = localize('DataScience.pandasTooOldForViewingFormat', 'Python package \'pandas\' is version {0}. Version 0.20 or greater is required for viewing data.');
    export const pandasRequiredForViewing = localize('DataScience.pandasRequiredForViewing', 'Python package \'pandas\' is required for viewing data.');
}

export namespace DebugConfigurationPrompts {
    export const selectConfigurationTitle = localize('debug.selectConfigurationTitle', 'Select a debug configuration');
    export const selectConfigurationPlaceholder = localize('debug.selectConfigurationPlaceholder', 'Debug Configuration');
    export const debugFileConfigurationLabel = localize('debug.debugFileConfigurationLabel', 'Python File');
    export const debugFileConfigurationDescription = localize('debug.debugFileConfigurationDescription', 'Debug currently active Python file');
    export const debugModuleConfigurationLabel = localize('debug.debugModuleConfigurationLabel', 'Module');
    export const debugModuleConfigurationDescription = localize('debug.debugModuleConfigurationDescription', 'Debug a python module by invoking it with \'-m\'');
    export const remoteAttachConfigurationLabel = localize('debug.remoteAttachConfigurationLabel', 'Remote Attach');
    export const remoteAttachConfigurationDescription = localize('debug.remoteAttachConfigurationDescription', 'Attach to a remote ptsvd debug server');
    export const debugDjangoConfigurationLabel = localize('debug.debugDjangoConfigurationLabel', 'Django');
    export const debugDjangoConfigurationDescription = localize('debug.debugDjangoConfigurationDescription', 'Launch and debug a Django web application');
    export const debugFlaskConfigurationLabel = localize('debug.debugFlaskConfigurationLabel', 'Flask');
    export const debugFlaskConfigurationDescription = localize('debug.debugFlaskConfigurationDescription', 'Launch and debug a Flask web application');
    export const debugPyramidConfigurationLabel = localize('debug.debugPyramidConfigurationLabel', 'Pyramid');
    export const debugPyramidConfigurationDescription = localize('debug.debugPyramidConfigurationDescription', 'Web Application');
    export const djangoEnterManagePyPathTitle = localize('debug.djangoEnterManagePyPathTitle', 'Debug Django');
    // tslint:disable-next-line:no-invalid-template-strings
    export const djangoEnterManagePyPathPrompt = localize('debug.djangoEnterManagePyPathPrompt', 'Enter path to manage.py (\'${workspaceFolder}\' points to the root of the current workspace folder)');
    export const djangoEnterManagePyPathInvalidFilePathError = localize('debug.djangoEnterManagePyPathInvalidFilePathError', 'Enter a valid python file path');
    export const flaskEnterAppPathOrNamePathTitle = localize('debug.flaskEnterAppPathOrNamePathTitle', 'Debug Flask');
    export const flaskEnterAppPathOrNamePathPrompt = localize('debug.flaskEnterAppPathOrNamePathPrompt', 'Enter path to application, e.g. \'app.py\' or \'app\'');
    export const flaskEnterAppPathOrNamePathInvalidNameError = localize('debug.flaskEnterAppPathOrNamePathInvalidNameError', 'Enter a valid name');

    export const moduleEnterModuleTitle = localize('debug.moduleEnterModuleTitle', 'Debug Module');
    export const moduleEnterModulePrompt = localize('debug.moduleEnterModulePrompt', 'Enter Python module/package name');
    export const moduleEnterModuleInvalidNameError = localize('debug.moduleEnterModuleInvalidNameError', 'Enter a valid module name');
    export const pyramidEnterDevelopmentIniPathTitle = localize('debug.pyramidEnterDevelopmentIniPathTitle', 'Debug Pyramid');
    // tslint:disable-next-line:no-invalid-template-strings
    export const pyramidEnterDevelopmentIniPathPrompt = localize('debug.pyramidEnterDevelopmentIniPathPrompt', '`Enter path to development.ini (\'${workspaceFolderToken}\' points to the root of the current workspace folder)`');
    export const pyramidEnterDevelopmentIniPathInvalidFilePathError = localize('debug.pyramidEnterDevelopmentIniPathInvalidFilePathError', 'Enter a valid file path');
    export const attachRemotePortTitle = localize('debug.attachRemotePortTitle', 'Remote Debugging');
    export const attachRemotePortPrompt = localize('debug.attachRemotePortPrompt', 'Enter the port number that the ptvsd server is listening on');
    export const attachRemotePortValidationError = localize('debug.attachRemotePortValidationError', 'Enter a valid port number');
    export const attachRemoteHostTitle = localize('debug.attachRemoteHostTitle', 'Remote Debugging');
    export const attachRemoteHostPrompt = localize('debug.attachRemoteHostPrompt', 'Enter host name');
    export const attachRemoteHostValidationError = localize('debug.attachRemoteHostValidationError', 'Enter a host name or IP address');
}

export namespace UnitTests {
    export const testErrorDiagnosticMessage = localize('UnitTests.testErrorDiagnosticMessage', 'Error');
    export const testFailDiagnosticMessage = localize('UnitTests.testFailDiagnosticMessage', 'Fail');
    export const testSkippedDiagnosticMessage = localize('UnitTests.testSkippedDiagnosticMessage', 'Skipped');
    export const configureTests = localize('UnitTests.configureTests', 'Configure Test Framework');
    export const disableTests = localize('UnitTests.disableTests', 'Disable Tests');
}

// Skip using vscode-nls and instead just compute our strings based on key values. Key values
// can be loaded out of the nls.<locale>.json files
let loadedCollection: Record<string, string> | undefined;
let defaultCollection: Record<string, string> | undefined;
const askedForCollection: Record<string, string> = {};
let loadedLocale: string;

export function localize(key: string, defValue: string) {
    // Return a pointer to function so that we refetch it on each call.
    return () => {
        return getString(key, defValue);
    };
}

export function getCollection() {
    // Load the current collection
    if (!loadedCollection || parseLocale() !== loadedLocale) {
        load();
    }

    // Combine the default and loaded collections
    return { ...defaultCollection, ...loadedCollection };
}

export function getAskedForCollection() {
    return askedForCollection;
}

function parseLocale(): string {
    // Attempt to load from the vscode locale. If not there, use english
    const vscodeConfigString = process.env.VSCODE_NLS_CONFIG;
    return vscodeConfigString ? JSON.parse(vscodeConfigString).locale : 'en-us';
}

function getString(key: string, defValue: string) {
    // Load the current collection
    if (!loadedCollection || parseLocale() !== loadedLocale) {
        load();
    }

    // First lookup in the dictionary that matches the current locale
    if (loadedCollection && loadedCollection.hasOwnProperty(key)) {
        askedForCollection[key] = loadedCollection[key];
        return loadedCollection[key];
    }

    // Fallback to the default dictionary
    if (defaultCollection && defaultCollection.hasOwnProperty(key)) {
        askedForCollection[key] = defaultCollection[key];
        return defaultCollection[key];
    }

    // Not found, return the default
    askedForCollection[key] = defValue;
    return defValue;
}

function load() {
    // Figure out our current locale.
    loadedLocale = parseLocale();

    // Find the nls file that matches (if there is one)
    const nlsFile = path.join(EXTENSION_ROOT_DIR, `package.nls.${loadedLocale}.json`);
    if (fs.existsSync(nlsFile)) {
        const contents = fs.readFileSync(nlsFile, 'utf8');
        loadedCollection = JSON.parse(contents);
    } else {
        // If there isn't one, at least remember that we looked so we don't try to load a second time
        loadedCollection = {};
    }

    // Get the default collection if necessary. Strings may be in the default or the locale json
    if (!defaultCollection) {
        const defaultNlsFile = path.join(EXTENSION_ROOT_DIR, 'package.nls.json');
        if (fs.existsSync(defaultNlsFile)) {
            const contents = fs.readFileSync(defaultNlsFile, 'utf8');
            defaultCollection = JSON.parse(contents);
        } else {
            defaultCollection = {};
        }
    }
}

// Default to loading the current locale
load();
