'use strict';

var obsidian = require('obsidian');
var require$$0 = require('util');
var path = require('path');
var childProcess = require('child_process');
var fs = require('fs');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var childProcess__default = /*#__PURE__*/_interopDefaultLegacy(childProcess);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var DEFAULT_SETTING = {
    searches: [{
            tags: [],
            query: 'https://www.google.com/search?&q={{title}}',
            name: 'Google',
        }, {
            tags: [],
            query: 'https://en.wikipedia.org/wiki/Special:Search/{{title}}',
            name: 'Wikipedia',
        }],
};
var parseTags = function (inputs) {
    return inputs.split(',')
        .map(function (s) { return s.trim(); })
        .filter(function (s) { return /^#([A-Za-z])\w+$/.test(s); });
};
var SOISettingTab = /** @class */ (function (_super) {
    __extends(SOISettingTab, _super);
    function SOISettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SOISettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        var plugin = this.plugin;
        // Code mostly taken from https://github.com/SilentVoid13/Templater/blob/master/src/settings.ts
        plugin.settings.searches.forEach(function (search) {
            var div = containerEl.createEl('div');
            div.addClass('soi_div');
            // const title = containerEl.createEl('h4', {
            //   text: search.name,
            // });
            // div.appendChild(title);
            new obsidian.Setting(div) //
                .addExtraButton(function (extra) {
                extra.setIcon('cross')
                    .setTooltip('Delete')
                    .onClick(function () {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        plugin.settings.searches.splice(index, 1);
                        // Force refresh
                        _this.display();
                    }
                });
            })
                .addText(function (text) {
                return text.setPlaceholder('Search name')
                    .setValue(search.name)
                    .onChange(function (newValue) {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        search.name = newValue;
                        plugin.saveSettings();
                        // title.textContent = newValue;
                    }
                });
            }).setName('Name')
                .setDesc('Name of the search. Click the cross to delete the search.');
            new obsidian.Setting(div)
                .addTextArea(function (text) {
                var t = text.setPlaceholder('Search query')
                    .setValue(search.query)
                    .onChange(function (newQuery) {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        search.query = newQuery;
                        plugin.saveSettings();
                    }
                });
                t.inputEl.setAttr('rows', 2);
                return t; //
            }).setName('URL')
                .setDesc('URL to open when executing the search. Use {{title}} to refer to the title of the note.');
            new obsidian.Setting(div).addText(function (text) {
                return text.setPlaceholder('')
                    .setValue(search.tags.join(', '))
                    .onChange(function (newValue) {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        search.tags = parseTags(newValue);
                        plugin.saveSettings();
                    }
                });
            }).setName('Tags')
                .setDesc('Only add search to notes with these comma-separated tags. Leave empty to use all tags.');
        });
        var div = containerEl.createEl('div');
        div.addClass('soi_div2');
        var setting = new obsidian.Setting(containerEl)
            .addButton(function (button) {
            return button.setButtonText('Add Search').onClick(function () {
                plugin.settings.searches.push({
                    name: '',
                    query: '',
                    tags: [],
                });
                // Force refresh
                _this.display();
            });
        });
        setting.infoEl.remove();
        div.appendChild(containerEl.lastChild);
    };
    return SOISettingTab;
}(obsidian.PluginSettingTab));

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

let isDocker;

function hasDockerEnv() {
	try {
		fs__default['default'].statSync('/.dockerenv');
		return true;
	} catch (_) {
		return false;
	}
}

function hasDockerCGroup() {
	try {
		return fs__default['default'].readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
	} catch (_) {
		return false;
	}
}

var isDocker_1 = () => {
	if (isDocker === undefined) {
		isDocker = hasDockerEnv() || hasDockerCGroup();
	}

	return isDocker;
};

var isWsl_1 = createCommonjsModule(function (module) {




const isWsl = () => {
	if (process.platform !== 'linux') {
		return false;
	}

	if (os__default['default'].release().toLowerCase().includes('microsoft')) {
		if (isDocker_1()) {
			return false;
		}

		return true;
	}

	try {
		return fs__default['default'].readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft') ?
			!isDocker_1() : false;
	} catch (_) {
		return false;
	}
};

if (process.env.__IS_WSL_TEST__) {
	module.exports = isWsl;
} else {
	module.exports = isWsl();
}
});

const {promisify} = require$$0__default['default'];






const pAccess = promisify(fs__default['default'].access);
const pExecFile = promisify(childProcess__default['default'].execFile);

// Path to included `xdg-open`.
const localXdgOpenPath = path__default['default'].join(__dirname, 'xdg-open');

// Convert a path from WSL format to Windows format:
// `/mnt/c/Program Files/Example/MyApp.exe` → `C:\Program Files\Example\MyApp.exe`
const wslToWindowsPath = async path => {
	const {stdout} = await pExecFile('wslpath', ['-w', path]);
	return stdout.trim();
};

// Convert a path from Windows format to WSL format
const windowsToWslPath = async path => {
	const {stdout} = await pExecFile('wslpath', [path]);
	return stdout.trim();
};

// Get an environment variable from Windows
const wslGetWindowsEnvVar = async envVar => {
	const {stdout} = await pExecFile('wslvar', [envVar]);
	return stdout.trim();
};

var open = async (target, options) => {
	if (typeof target !== 'string') {
		throw new TypeError('Expected a `target`');
	}

	options = {
		wait: false,
		background: false,
		allowNonzeroExitCode: false,
		...options
	};

	let command;
	let {app} = options;
	let appArguments = [];
	const cliArguments = [];
	const childProcessOptions = {};

	if (Array.isArray(app)) {
		appArguments = app.slice(1);
		app = app[0];
	}

	if (process.platform === 'darwin') {
		command = 'open';

		if (options.wait) {
			cliArguments.push('--wait-apps');
		}

		if (options.background) {
			cliArguments.push('--background');
		}

		if (app) {
			cliArguments.push('-a', app);
		}
	} else if (process.platform === 'win32' || (isWsl_1 && !isDocker_1())) {
		const windowsRoot = isWsl_1 ? await wslGetWindowsEnvVar('systemroot') : process.env.SYSTEMROOT;
		command = String.raw`${windowsRoot}\System32\WindowsPowerShell\v1.0\powershell${isWsl_1 ? '.exe' : ''}`;
		cliArguments.push(
			'-NoProfile',
			'-NonInteractive',
			'–ExecutionPolicy',
			'Bypass',
			'-EncodedCommand'
		);

		if (isWsl_1) {
			command = await windowsToWslPath(command);
		} else {
			childProcessOptions.windowsVerbatimArguments = true;
		}

		const encodedArguments = ['Start'];

		if (options.wait) {
			encodedArguments.push('-Wait');
		}

		if (app) {
			if (isWsl_1 && app.startsWith('/')) {
				const windowsPath = await wslToWindowsPath(app);
				app = windowsPath;
			}

			// Double quote with double quotes to ensure the inner quotes are passed through.
			// Inner quotes are delimited for PowerShell interpretation with backticks.
			encodedArguments.push(`"\`"${app}\`""`, '-ArgumentList');
			appArguments.unshift(target);
		} else {
			encodedArguments.push(`"\`"${target}\`""`);
		}

		if (appArguments.length > 0) {
			appArguments = appArguments.map(arg => `"\`"${arg}\`""`);
			encodedArguments.push(appArguments.join(','));
		}

		// Using Base64-encoded command, accepted by PowerShell, to allow special characters.
		target = Buffer.from(encodedArguments.join(' '), 'utf16le').toString('base64');
	} else {
		if (app) {
			command = app;
		} else {
			// When bundled by Webpack, there's no actual package file path and no local `xdg-open`.
			const isBundled = !__dirname || __dirname === '/';

			// Check if local `xdg-open` exists and is executable.
			let exeLocalXdgOpen = false;
			try {
				await pAccess(localXdgOpenPath, fs__default['default'].constants.X_OK);
				exeLocalXdgOpen = true;
			} catch (_) {}

			const useSystemXdgOpen = process.versions.electron ||
				process.platform === 'android' || isBundled || !exeLocalXdgOpen;
			command = useSystemXdgOpen ? 'xdg-open' : localXdgOpenPath;
		}

		if (appArguments.length > 0) {
			cliArguments.push(...appArguments);
		}

		if (!options.wait) {
			// `xdg-open` will block the process unless stdio is ignored
			// and it's detached from the parent even if it's unref'd.
			childProcessOptions.stdio = 'ignore';
			childProcessOptions.detached = true;
		}
	}

	cliArguments.push(target);

	if (process.platform === 'darwin' && appArguments.length > 0) {
		cliArguments.push('--args', ...appArguments);
	}

	const subprocess = childProcess__default['default'].spawn(command, cliArguments, childProcessOptions);

	if (options.wait) {
		return new Promise((resolve, reject) => {
			subprocess.once('error', reject);

			subprocess.once('close', exitCode => {
				if (options.allowNonzeroExitCode && exitCode > 0) {
					reject(new Error(`Exited with code ${exitCode}`));
					return;
				}

				resolve(subprocess);
			});
		});
	}

	subprocess.unref();

	return subprocess;
};

var SearchModal = /** @class */ (function (_super) {
    __extends(SearchModal, _super);
    function SearchModal(app, plugin, query) {
        var _this = _super.call(this, app) || this;
        _this.plugin = plugin;
        _this.setPlaceholder('');
        _this.query = query;
        _this.setInstructions([{ command: '↑↓', purpose: 'to navigate' }, { command: '↵', purpose: "to search " + _this.query }, { command: 'esc', purpose: 'to dismiss' }]);
        return _this;
    }
    SearchModal.prototype.onOpen = function () {
        _super.prototype.onOpen.call(this);
        // const {contentEl} = this;
        this.inputEl.focus();
    };
    SearchModal.prototype.onClose = function () {
        _super.prototype.onClose.call(this);
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    SearchModal.prototype.getItemText = function (item) {
        return item.name;
    };
    SearchModal.prototype.renderSuggestion = function (item, el) {
        _super.prototype.renderSuggestion.call(this, item, el);
        el.innerHTML = "Search on: " + el.innerHTML;
    };
    SearchModal.prototype.getItems = function () {
        return this.plugin.settings.searches;
    };
    SearchModal.prototype.onChooseItem = function (item, evt) {
        this.plugin.openSearch(item, this.query);
    };
    return SearchModal;
}(obsidian.FuzzySuggestModal));

var SearchOnInternetPlugin = /** @class */ (function (_super) {
    __extends(SearchOnInternetPlugin, _super);
    function SearchOnInternetPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchOnInternetPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var plugin;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading search-on-internet');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new SOISettingTab(this.app, this));
                        plugin = this;
                        this.registerEvent(this.app.workspace.on('file-menu', function (menu, file, source) {
                            var _a, _b;
                            if (file === null) {
                                return;
                            }
                            var fileTags = (_b = (_a = _this.app.metadataCache.getFileCache(file)) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.map(function (t) { return t.tag; });
                            _this.settings.searches.forEach(function (search) {
                                if (search.tags.length === 0 || (fileTags === null || fileTags === void 0 ? void 0 : fileTags.some(function (t) { return search.tags.contains(t); }))) {
                                    menu.addItem(function (item) {
                                        item.setTitle("Search " + search.name).setIcon('search')
                                            .onClick(function (evt) {
                                            plugin.openSearch(search, file.basename);
                                        });
                                    });
                                }
                            });
                        }));
                        this.addCommand({
                            id: 'search-on-internet',
                            name: 'Perform search',
                            callback: function () {
                                var query = null;
                                var wSelection = window.getSelection();
                                var docSelection = document === null || document === void 0 ? void 0 : document.getSelection();
                                if (wSelection) {
                                    query = wSelection.toString();
                                }
                                else if (document && docSelection.type != 'Control') {
                                    query = docSelection.toString();
                                }
                                if (query === null || query === '') {
                                    var activeView = _this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                                    if (activeView == null) {
                                        return;
                                    }
                                    query = activeView.getDisplayText();
                                }
                                var modal = new SearchModal(plugin.app, plugin, query);
                                modal.open();
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchOnInternetPlugin.prototype.openSearch = function (search, query) {
        var url = search.query.replace('{{title}}', encodeURIComponent(query));
        console.log("SOI: Opening URL " + url);
        open(url);
    };
    SearchOnInternetPlugin.prototype.onunload = function () {
        console.log('unloading search-on-internet');
    };
    SearchOnInternetPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadedSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedSettings = _a.sent();
                        if (loadedSettings && loadedSettings.hasOwnProperty('searches')) {
                            this.settings = loadedSettings;
                        }
                        else {
                            this.settings = DEFAULT_SETTING;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchOnInternetPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SearchOnInternetPlugin;
}(obsidian.Plugin));

module.exports = SearchOnInternetPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNldHRpbmdzLnRzIiwibm9kZV9tb2R1bGVzL2lzLWRvY2tlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pcy13c2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvb3Blbi9pbmRleC5qcyIsIm1vZGFsLnRzIiwibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQge0FwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZ30gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IFNlYXJjaE9uSW50ZXJuZXRQbHVnaW4gZnJvbSAnLi9tYWluJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTZXR0aW5nIHtcbiAgICB0YWdzOiBzdHJpbmdbXTtcbiAgICBxdWVyeTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTT0lTZXR0aW5ncyB7XG4gICAgc2VhcmNoZXM6IFNlYXJjaFNldHRpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElORzogU09JU2V0dGluZ3MgPSB7XG4gIHNlYXJjaGVzOiBbe1xuICAgIHRhZ3M6IFtdIGFzIHN0cmluZ1tdLFxuICAgIHF1ZXJ5OiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/JnE9e3t0aXRsZX19JyxcbiAgICBuYW1lOiAnR29vZ2xlJyxcbiAgfSBhcyBTZWFyY2hTZXR0aW5nLCB7XG4gICAgdGFnczogW10gYXMgc3RyaW5nW10sXG4gICAgcXVlcnk6ICdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlNlYXJjaC97e3RpdGxlfX0nLFxuICAgIG5hbWU6ICdXaWtpcGVkaWEnLFxuICB9IGFzIFNlYXJjaFNldHRpbmddLFxufTtcblxuY29uc3QgcGFyc2VUYWdzID0gZnVuY3Rpb24oaW5wdXRzOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBpbnB1dHMuc3BsaXQoJywnKVxuICAgICAgLm1hcCgocykgPT4gcy50cmltKCkpXG4gICAgICAuZmlsdGVyKChzKSA9PiAvXiMoW0EtWmEtel0pXFx3KyQvLnRlc3QocykpO1xufTtcblxuXG5leHBvcnQgY2xhc3MgU09JU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICAgIHBsdWdpbjogU2VhcmNoT25JbnRlcm5ldFBsdWdpbjtcblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFNlYXJjaE9uSW50ZXJuZXRQbHVnaW4pIHtcbiAgICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIH1cblxuICAgIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICBjb25zdCB7Y29udGFpbmVyRWx9ID0gdGhpcztcblxuICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW47XG5cbiAgICAgIC8vIENvZGUgbW9zdGx5IHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1NpbGVudFZvaWQxMy9UZW1wbGF0ZXIvYmxvYi9tYXN0ZXIvc3JjL3NldHRpbmdzLnRzXG4gICAgICBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuZm9yRWFjaCgoc2VhcmNoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdkaXYnKTtcbiAgICAgICAgZGl2LmFkZENsYXNzKCdzb2lfZGl2Jyk7XG5cbiAgICAgICAgLy8gY29uc3QgdGl0bGUgPSBjb250YWluZXJFbC5jcmVhdGVFbCgnaDQnLCB7XG4gICAgICAgIC8vICAgdGV4dDogc2VhcmNoLm5hbWUsXG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBuZXcgU2V0dGluZyhkaXYpLy9cbiAgICAgICAgICAgIC5hZGRFeHRyYUJ1dHRvbigoZXh0cmEpID0+IHtcbiAgICAgICAgICAgICAgZXh0cmEuc2V0SWNvbignY3Jvc3MnKVxuICAgICAgICAgICAgICAgICAgLnNldFRvb2x0aXAoJ0RlbGV0ZScpXG4gICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzLmluZGV4T2Yoc2VhcmNoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zZWFyY2hlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlIHJlZnJlc2hcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHQuc2V0UGxhY2Vob2xkZXIoJ1NlYXJjaCBuYW1lJylcbiAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShzZWFyY2gubmFtZSlcbiAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuaW5kZXhPZihzZWFyY2gpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaC5uYW1lID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlLnRleHRDb250ZW50ID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuc2V0TmFtZSgnTmFtZScpXG4gICAgICAgICAgICAuc2V0RGVzYygnTmFtZSBvZiB0aGUgc2VhcmNoLiBDbGljayB0aGUgY3Jvc3MgdG8gZGVsZXRlIHRoZSBzZWFyY2guJyk7XG4gICAgICAgIG5ldyBTZXR0aW5nKGRpdilcbiAgICAgICAgICAgIC5hZGRUZXh0QXJlYSgodGV4dCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0ID0gdGV4dC5zZXRQbGFjZWhvbGRlcignU2VhcmNoIHF1ZXJ5JylcbiAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShzZWFyY2gucXVlcnkpXG4gICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKG5ld1F1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzLmluZGV4T2Yoc2VhcmNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gucXVlcnkgPSBuZXdRdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0LmlucHV0RWwuc2V0QXR0cigncm93cycsIDIpO1xuICAgICAgICAgICAgICByZXR1cm4gdDsvL1xuICAgICAgICAgICAgfSkuc2V0TmFtZSgnVVJMJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdVUkwgdG8gb3BlbiB3aGVuIGV4ZWN1dGluZyB0aGUgc2VhcmNoLiBVc2Uge3t0aXRsZX19IHRvIHJlZmVyIHRvIHRoZSB0aXRsZSBvZiB0aGUgbm90ZS4nKTtcbiAgICAgICAgbmV3IFNldHRpbmcoZGl2KS5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRleHQuc2V0UGxhY2Vob2xkZXIoJycpXG4gICAgICAgICAgICAgIC5zZXRWYWx1ZShzZWFyY2gudGFncy5qb2luKCcsICcpKVxuICAgICAgICAgICAgICAub25DaGFuZ2UoKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuaW5kZXhPZihzZWFyY2gpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICBzZWFyY2gudGFncyA9IHBhcnNlVGFncyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuc2V0TmFtZSgnVGFncycpXG4gICAgICAgICAgICAuc2V0RGVzYygnT25seSBhZGQgc2VhcmNoIHRvIG5vdGVzIHdpdGggdGhlc2UgY29tbWEtc2VwYXJhdGVkIHRhZ3MuIExlYXZlIGVtcHR5IHRvIHVzZSBhbGwgdGFncy4nKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkaXYgPSBjb250YWluZXJFbC5jcmVhdGVFbCgnZGl2Jyk7XG4gICAgICBkaXYuYWRkQ2xhc3MoJ3NvaV9kaXYyJyk7XG5cbiAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAuYWRkQnV0dG9uKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBidXR0b24uc2V0QnV0dG9uVGV4dCgnQWRkIFNlYXJjaCcpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgICB9IGFzIFNlYXJjaFNldHRpbmcpO1xuICAgICAgICAgICAgICAvLyBGb3JjZSByZWZyZXNoXG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICBzZXR0aW5nLmluZm9FbC5yZW1vdmUoKTtcblxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsLmxhc3RDaGlsZCk7XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5sZXQgaXNEb2NrZXI7XG5cbmZ1bmN0aW9uIGhhc0RvY2tlckVudigpIHtcblx0dHJ5IHtcblx0XHRmcy5zdGF0U3luYygnLy5kb2NrZXJlbnYnKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYXNEb2NrZXJDR3JvdXAoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYygnL3Byb2Mvc2VsZi9jZ3JvdXAnLCAndXRmOCcpLmluY2x1ZGVzKCdkb2NrZXInKTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcblx0aWYgKGlzRG9ja2VyID09PSB1bmRlZmluZWQpIHtcblx0XHRpc0RvY2tlciA9IGhhc0RvY2tlckVudigpIHx8IGhhc0RvY2tlckNHcm91cCgpO1xuXHR9XG5cblx0cmV0dXJuIGlzRG9ja2VyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IGlzRG9ja2VyID0gcmVxdWlyZSgnaXMtZG9ja2VyJyk7XG5cbmNvbnN0IGlzV3NsID0gKCkgPT4ge1xuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2xpbnV4Jykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmIChvcy5yZWxlYXNlKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWljcm9zb2Z0JykpIHtcblx0XHRpZiAoaXNEb2NrZXIoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gZnMucmVhZEZpbGVTeW5jKCcvcHJvYy92ZXJzaW9uJywgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtaWNyb3NvZnQnKSA/XG5cdFx0XHQhaXNEb2NrZXIoKSA6IGZhbHNlO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuX19JU19XU0xfVEVTVF9fKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gaXNXc2w7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGlzV3NsKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBpc1dzbCA9IHJlcXVpcmUoJ2lzLXdzbCcpO1xuY29uc3QgaXNEb2NrZXIgPSByZXF1aXJlKCdpcy1kb2NrZXInKTtcblxuY29uc3QgcEFjY2VzcyA9IHByb21pc2lmeShmcy5hY2Nlc3MpO1xuY29uc3QgcEV4ZWNGaWxlID0gcHJvbWlzaWZ5KGNoaWxkUHJvY2Vzcy5leGVjRmlsZSk7XG5cbi8vIFBhdGggdG8gaW5jbHVkZWQgYHhkZy1vcGVuYC5cbmNvbnN0IGxvY2FsWGRnT3BlblBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAneGRnLW9wZW4nKTtcblxuLy8gQ29udmVydCBhIHBhdGggZnJvbSBXU0wgZm9ybWF0IHRvIFdpbmRvd3MgZm9ybWF0OlxuLy8gYC9tbnQvYy9Qcm9ncmFtIEZpbGVzL0V4YW1wbGUvTXlBcHAuZXhlYCDihpIgYEM6XFxQcm9ncmFtIEZpbGVzXFxFeGFtcGxlXFxNeUFwcC5leGVgXG5jb25zdCB3c2xUb1dpbmRvd3NQYXRoID0gYXN5bmMgcGF0aCA9PiB7XG5cdGNvbnN0IHtzdGRvdXR9ID0gYXdhaXQgcEV4ZWNGaWxlKCd3c2xwYXRoJywgWyctdycsIHBhdGhdKTtcblx0cmV0dXJuIHN0ZG91dC50cmltKCk7XG59O1xuXG4vLyBDb252ZXJ0IGEgcGF0aCBmcm9tIFdpbmRvd3MgZm9ybWF0IHRvIFdTTCBmb3JtYXRcbmNvbnN0IHdpbmRvd3NUb1dzbFBhdGggPSBhc3luYyBwYXRoID0+IHtcblx0Y29uc3Qge3N0ZG91dH0gPSBhd2FpdCBwRXhlY0ZpbGUoJ3dzbHBhdGgnLCBbcGF0aF0pO1xuXHRyZXR1cm4gc3Rkb3V0LnRyaW0oKTtcbn07XG5cbi8vIEdldCBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZSBmcm9tIFdpbmRvd3NcbmNvbnN0IHdzbEdldFdpbmRvd3NFbnZWYXIgPSBhc3luYyBlbnZWYXIgPT4ge1xuXHRjb25zdCB7c3Rkb3V0fSA9IGF3YWl0IHBFeGVjRmlsZSgnd3NsdmFyJywgW2VudlZhcl0pO1xuXHRyZXR1cm4gc3Rkb3V0LnRyaW0oKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgKHRhcmdldCwgb3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIGB0YXJnZXRgJyk7XG5cdH1cblxuXHRvcHRpb25zID0ge1xuXHRcdHdhaXQ6IGZhbHNlLFxuXHRcdGJhY2tncm91bmQ6IGZhbHNlLFxuXHRcdGFsbG93Tm9uemVyb0V4aXRDb2RlOiBmYWxzZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0bGV0IGNvbW1hbmQ7XG5cdGxldCB7YXBwfSA9IG9wdGlvbnM7XG5cdGxldCBhcHBBcmd1bWVudHMgPSBbXTtcblx0Y29uc3QgY2xpQXJndW1lbnRzID0gW107XG5cdGNvbnN0IGNoaWxkUHJvY2Vzc09wdGlvbnMgPSB7fTtcblxuXHRpZiAoQXJyYXkuaXNBcnJheShhcHApKSB7XG5cdFx0YXBwQXJndW1lbnRzID0gYXBwLnNsaWNlKDEpO1xuXHRcdGFwcCA9IGFwcFswXTtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xuXHRcdGNvbW1hbmQgPSAnb3Blbic7XG5cblx0XHRpZiAob3B0aW9ucy53YWl0KSB7XG5cdFx0XHRjbGlBcmd1bWVudHMucHVzaCgnLS13YWl0LWFwcHMnKTtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG5cdFx0XHRjbGlBcmd1bWVudHMucHVzaCgnLS1iYWNrZ3JvdW5kJyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFwcCkge1xuXHRcdFx0Y2xpQXJndW1lbnRzLnB1c2goJy1hJywgYXBwKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyB8fCAoaXNXc2wgJiYgIWlzRG9ja2VyKCkpKSB7XG5cdFx0Y29uc3Qgd2luZG93c1Jvb3QgPSBpc1dzbCA/IGF3YWl0IHdzbEdldFdpbmRvd3NFbnZWYXIoJ3N5c3RlbXJvb3QnKSA6IHByb2Nlc3MuZW52LlNZU1RFTVJPT1Q7XG5cdFx0Y29tbWFuZCA9IFN0cmluZy5yYXdgJHt3aW5kb3dzUm9vdH1cXFN5c3RlbTMyXFxXaW5kb3dzUG93ZXJTaGVsbFxcdjEuMFxccG93ZXJzaGVsbCR7aXNXc2wgPyAnLmV4ZScgOiAnJ31gO1xuXHRcdGNsaUFyZ3VtZW50cy5wdXNoKFxuXHRcdFx0Jy1Ob1Byb2ZpbGUnLFxuXHRcdFx0Jy1Ob25JbnRlcmFjdGl2ZScsXG5cdFx0XHQn4oCTRXhlY3V0aW9uUG9saWN5Jyxcblx0XHRcdCdCeXBhc3MnLFxuXHRcdFx0Jy1FbmNvZGVkQ29tbWFuZCdcblx0XHQpO1xuXG5cdFx0aWYgKGlzV3NsKSB7XG5cdFx0XHRjb21tYW5kID0gYXdhaXQgd2luZG93c1RvV3NsUGF0aChjb21tYW5kKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRQcm9jZXNzT3B0aW9ucy53aW5kb3dzVmVyYmF0aW1Bcmd1bWVudHMgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVuY29kZWRBcmd1bWVudHMgPSBbJ1N0YXJ0J107XG5cblx0XHRpZiAob3B0aW9ucy53YWl0KSB7XG5cdFx0XHRlbmNvZGVkQXJndW1lbnRzLnB1c2goJy1XYWl0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFwcCkge1xuXHRcdFx0aWYgKGlzV3NsICYmIGFwcC5zdGFydHNXaXRoKCcvJykpIHtcblx0XHRcdFx0Y29uc3Qgd2luZG93c1BhdGggPSBhd2FpdCB3c2xUb1dpbmRvd3NQYXRoKGFwcCk7XG5cdFx0XHRcdGFwcCA9IHdpbmRvd3NQYXRoO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEb3VibGUgcXVvdGUgd2l0aCBkb3VibGUgcXVvdGVzIHRvIGVuc3VyZSB0aGUgaW5uZXIgcXVvdGVzIGFyZSBwYXNzZWQgdGhyb3VnaC5cblx0XHRcdC8vIElubmVyIHF1b3RlcyBhcmUgZGVsaW1pdGVkIGZvciBQb3dlclNoZWxsIGludGVycHJldGF0aW9uIHdpdGggYmFja3RpY2tzLlxuXHRcdFx0ZW5jb2RlZEFyZ3VtZW50cy5wdXNoKGBcIlxcYFwiJHthcHB9XFxgXCJcImAsICctQXJndW1lbnRMaXN0Jyk7XG5cdFx0XHRhcHBBcmd1bWVudHMudW5zaGlmdCh0YXJnZXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbmNvZGVkQXJndW1lbnRzLnB1c2goYFwiXFxgXCIke3RhcmdldH1cXGBcIlwiYCk7XG5cdFx0fVxuXG5cdFx0aWYgKGFwcEFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRhcHBBcmd1bWVudHMgPSBhcHBBcmd1bWVudHMubWFwKGFyZyA9PiBgXCJcXGBcIiR7YXJnfVxcYFwiXCJgKTtcblx0XHRcdGVuY29kZWRBcmd1bWVudHMucHVzaChhcHBBcmd1bWVudHMuam9pbignLCcpKTtcblx0XHR9XG5cblx0XHQvLyBVc2luZyBCYXNlNjQtZW5jb2RlZCBjb21tYW5kLCBhY2NlcHRlZCBieSBQb3dlclNoZWxsLCB0byBhbGxvdyBzcGVjaWFsIGNoYXJhY3RlcnMuXG5cdFx0dGFyZ2V0ID0gQnVmZmVyLmZyb20oZW5jb2RlZEFyZ3VtZW50cy5qb2luKCcgJyksICd1dGYxNmxlJykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChhcHApIHtcblx0XHRcdGNvbW1hbmQgPSBhcHA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFdoZW4gYnVuZGxlZCBieSBXZWJwYWNrLCB0aGVyZSdzIG5vIGFjdHVhbCBwYWNrYWdlIGZpbGUgcGF0aCBhbmQgbm8gbG9jYWwgYHhkZy1vcGVuYC5cblx0XHRcdGNvbnN0IGlzQnVuZGxlZCA9ICFfX2Rpcm5hbWUgfHwgX19kaXJuYW1lID09PSAnLyc7XG5cblx0XHRcdC8vIENoZWNrIGlmIGxvY2FsIGB4ZGctb3BlbmAgZXhpc3RzIGFuZCBpcyBleGVjdXRhYmxlLlxuXHRcdFx0bGV0IGV4ZUxvY2FsWGRnT3BlbiA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcEFjY2Vzcyhsb2NhbFhkZ09wZW5QYXRoLCBmcy5jb25zdGFudHMuWF9PSyk7XG5cdFx0XHRcdGV4ZUxvY2FsWGRnT3BlbiA9IHRydWU7XG5cdFx0XHR9IGNhdGNoIChfKSB7fVxuXG5cdFx0XHRjb25zdCB1c2VTeXN0ZW1YZGdPcGVuID0gcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbiB8fFxuXHRcdFx0XHRwcm9jZXNzLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgfHwgaXNCdW5kbGVkIHx8ICFleGVMb2NhbFhkZ09wZW47XG5cdFx0XHRjb21tYW5kID0gdXNlU3lzdGVtWGRnT3BlbiA/ICd4ZGctb3BlbicgOiBsb2NhbFhkZ09wZW5QYXRoO1xuXHRcdH1cblxuXHRcdGlmIChhcHBBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y2xpQXJndW1lbnRzLnB1c2goLi4uYXBwQXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRpZiAoIW9wdGlvbnMud2FpdCkge1xuXHRcdFx0Ly8gYHhkZy1vcGVuYCB3aWxsIGJsb2NrIHRoZSBwcm9jZXNzIHVubGVzcyBzdGRpbyBpcyBpZ25vcmVkXG5cdFx0XHQvLyBhbmQgaXQncyBkZXRhY2hlZCBmcm9tIHRoZSBwYXJlbnQgZXZlbiBpZiBpdCdzIHVucmVmJ2QuXG5cdFx0XHRjaGlsZFByb2Nlc3NPcHRpb25zLnN0ZGlvID0gJ2lnbm9yZSc7XG5cdFx0XHRjaGlsZFByb2Nlc3NPcHRpb25zLmRldGFjaGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjbGlBcmd1bWVudHMucHVzaCh0YXJnZXQpO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJyAmJiBhcHBBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdGNsaUFyZ3VtZW50cy5wdXNoKCctLWFyZ3MnLCAuLi5hcHBBcmd1bWVudHMpO1xuXHR9XG5cblx0Y29uc3Qgc3VicHJvY2VzcyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBjbGlBcmd1bWVudHMsIGNoaWxkUHJvY2Vzc09wdGlvbnMpO1xuXG5cdGlmIChvcHRpb25zLndhaXQpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0c3VicHJvY2Vzcy5vbmNlKCdlcnJvcicsIHJlamVjdCk7XG5cblx0XHRcdHN1YnByb2Nlc3Mub25jZSgnY2xvc2UnLCBleGl0Q29kZSA9PiB7XG5cdFx0XHRcdGlmIChvcHRpb25zLmFsbG93Tm9uemVyb0V4aXRDb2RlICYmIGV4aXRDb2RlID4gMCkge1xuXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoYEV4aXRlZCB3aXRoIGNvZGUgJHtleGl0Q29kZX1gKSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzb2x2ZShzdWJwcm9jZXNzKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0c3VicHJvY2Vzcy51bnJlZigpO1xuXG5cdHJldHVybiBzdWJwcm9jZXNzO1xufTtcbiIsImltcG9ydCB7QXBwLCBGdXp6eU1hdGNoLCBGdXp6eVN1Z2dlc3RNb2RhbCwgTW9kYWx9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7U2VhcmNoU2V0dGluZ30gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgU2VhcmNoT25JbnRlcm5ldFBsdWdpbiBmcm9tICcuL21haW4nO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2RhbCBleHRlbmRzIEZ1enp5U3VnZ2VzdE1vZGFsPFNlYXJjaFNldHRpbmc+IHtcbiAgcGx1Z2luOiBTZWFyY2hPbkludGVybmV0UGx1Z2luO1xuICBxdWVyeTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBTZWFyY2hPbkludGVybmV0UGx1Z2luLCBxdWVyeTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyKCcnKTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgJyR7dGhpcy5xdWVyeX0nO1xuICAgIHRoaXMuc2V0SW5zdHJ1Y3Rpb25zKFt7Y29tbWFuZDogJ+KGkeKGkycsIHB1cnBvc2U6ICd0byBuYXZpZ2F0ZSd9LFxuICAgICAge2NvbW1hbmQ6ICfihrUnLCBwdXJwb3NlOiBgdG8gc2VhcmNoICR7dGhpcy5xdWVyeX1gfSxcbiAgICAgIHtjb21tYW5kOiAnZXNjJywgcHVycG9zZTogJ3RvIGRpc21pc3MnfV0pO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHN1cGVyLm9uT3BlbigpO1xuICAgIC8vIGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcbiAgICB0aGlzLmlucHV0RWwuZm9jdXMoKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgc3VwZXIub25DbG9zZSgpO1xuICAgIGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG5cbiAgZ2V0SXRlbVRleHQoaXRlbTogU2VhcmNoU2V0dGluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfVxuXG4gIHJlbmRlclN1Z2dlc3Rpb24oaXRlbTogRnV6enlNYXRjaDxTZWFyY2hTZXR0aW5nPiwgZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIucmVuZGVyU3VnZ2VzdGlvbihpdGVtLCBlbCk7XG4gICAgZWwuaW5uZXJIVE1MID0gYFNlYXJjaCBvbjogYCArIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldEl0ZW1zKCk6IFNlYXJjaFNldHRpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzO1xuICB9XG5cbiAgb25DaG9vc2VJdGVtKGl0ZW06IFNlYXJjaFNldHRpbmcsIGV2dDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnBsdWdpbi5vcGVuU2VhcmNoKGl0ZW0sIHRoaXMucXVlcnkpO1xuICB9XG59XG4iLCJpbXBvcnQge0V2ZW50UmVmLCBNYXJrZG93blByZXZpZXdWaWV3LCBNYXJrZG93blZpZXcsIFBsdWdpbiwgVEZpbGV9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7U09JU2V0dGluZ1RhYiwgU09JU2V0dGluZ3MsIERFRkFVTFRfU0VUVElORywgU2VhcmNoU2V0dGluZ30gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgb3BlbiBmcm9tICdvcGVuJztcbmltcG9ydCB7U2VhcmNoTW9kYWx9IGZyb20gJy4vbW9kYWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaE9uSW50ZXJuZXRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICAgIHNldHRpbmdzOiBTT0lTZXR0aW5ncztcblxuICAgIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIHNlYXJjaC1vbi1pbnRlcm5ldCcpO1xuXG4gICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNPSVNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcbiAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXM7XG4gICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW1lbnUnLCAobWVudSwgZmlsZTogVEZpbGUsIHNvdXJjZTpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpbGVUYWdzID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSlcbiAgICAgICAgICAgICAgICA/LnRhZ3M/Lm1hcCgodCkgPT4gdC50YWcpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zZWFyY2hlcy5mb3JFYWNoKChzZWFyY2gpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC50YWdzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICBmaWxlVGFncz8uc29tZSgodCkgPT4gc2VhcmNoLnRhZ3MuY29udGFpbnModCkpKSB7XG4gICAgICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpdGVtLnNldFRpdGxlKGBTZWFyY2ggJHtzZWFyY2gubmFtZX1gKS5zZXRJY29uKCdzZWFyY2gnKVxuICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5vcGVuU2VhcmNoKHNlYXJjaCwgZmlsZS5iYXNlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgaWQ6ICdzZWFyY2gtb24taW50ZXJuZXQnLFxuICAgICAgICBuYW1lOiAnUGVyZm9ybSBzZWFyY2gnLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgIGxldCBxdWVyeSA9IG51bGw7XG4gICAgICAgICAgY29uc3Qgd1NlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICBjb25zdCBkb2NTZWxlY3Rpb24gPSBkb2N1bWVudD8uZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgaWYgKHdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gd1NlbGVjdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQgJiYgZG9jU2VsZWN0aW9uLnR5cGUgIT0gJ0NvbnRyb2wnKSB7XG4gICAgICAgICAgICBxdWVyeSA9IGRvY1NlbGVjdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocXVlcnkgPT09IG51bGwgfHwgcXVlcnkgPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVWaWV3ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnkgPSBhY3RpdmVWaWV3LmdldERpc3BsYXlUZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IFNlYXJjaE1vZGFsKHBsdWdpbi5hcHAsIHBsdWdpbiwgcXVlcnkpO1xuICAgICAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBjb250ZXh0IG1lbnUgaXMgYSBiaXQgcHJvYmxlbWF0aWM6XG4gICAgICAvLyBPYnNpZGlhbiBzb21ldGltZXMgdXNlcyBpdHMgb3duIGNvbnRleHQgbWVudSwgZWcgd2hlbiByaWdodC1jbGlja2luZ1xuICAgICAgLy8gb24gaW50ZXJuYWwgbGluay4gQnV0IG90aGVyIHRpbWVzLCBpdCdzIGEgY29udGV4dCBtZW51IHRoYXRcbiAgICAgIC8vIGNhbm5vdCByZWFsbHkgYmUgZWRpdGVkIGVhc2lseS4gSXQgd291bGQgYmUgbmljZSBpZiBPYnNpZGlhblxuICAgICAgLy8gcHJvdmlkZWQgaXRzIG93biBjb250ZXh0IG1lbnUgZXZlcnl3aGVyZSB0byBob29rIGludG8uXG4gICAgICAvLyB0aGlzLnJlZ2lzdGVyQ29kZU1pcnJvcigoY20pID0+IHtcbiAgICAgIC8vICAgLy8gQHRzLWlnbm9yZVxuICAgICAgLy8gICBjbS5yZXNldFNlbGVjdGlvbk9uQ29udGV4dE1lbnU9ZmFsc2U7XG4gICAgICAvLyAgIGNtLm9uKCdjb250ZXh0bWVudScsIChlZGl0b3IsIGV2ZW50KT0+e1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVkaXRvcik7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIG9wZW5TZWFyY2goc2VhcmNoOiBTZWFyY2hTZXR0aW5nLCBxdWVyeTogc3RyaW5nKSB7XG4gICAgICBjb25zdCB1cmwgPSBzZWFyY2gucXVlcnkucmVwbGFjZSgne3t0aXRsZX19JywgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KSk7XG4gICAgICBjb25zb2xlLmxvZyhgU09JOiBPcGVuaW5nIFVSTCAke3VybH1gKTtcbiAgICAgIG9wZW4odXJsKTtcbiAgICB9XG5cbiAgICBvbnVubG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgc2VhcmNoLW9uLWludGVybmV0Jyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgICAgY29uc3QgbG9hZGVkU2V0dGluZ3MgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCkgYXMgYW55O1xuICAgICAgaWYgKGxvYWRlZFNldHRpbmdzICYmIGxvYWRlZFNldHRpbmdzLmhhc093blByb3BlcnR5KCdzZWFyY2hlcycpKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBsb2FkZWRTZXR0aW5ncztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBERUZBVUxUX1NFVFRJTkc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG5cblxuIl0sIm5hbWVzIjpbIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIiwiZnMiLCJvcyIsImlzRG9ja2VyIiwicmVxdWlyZSQkMCIsImNoaWxkUHJvY2VzcyIsInBhdGgiLCJpc1dzbCIsIkZ1enp5U3VnZ2VzdE1vZGFsIiwiTWFya2Rvd25WaWV3IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMs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
