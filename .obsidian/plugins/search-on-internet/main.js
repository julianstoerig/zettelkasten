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

var SearchOnInternetPlugin = /** @class */ (function (_super) {
    __extends(SearchOnInternetPlugin, _super);
    function SearchOnInternetPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchOnInternetPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading search-on-internet');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new SOISettingTab(this.app, this));
                        this.fileMenuEvent = this.app.workspace.on('file-menu', function (menu, file, source) {
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
                                            var url = search.query.replace('{{title}}', encodeURIComponent(file.basename));
                                            console.log("SOI: Opening URL " + url);
                                            open(url);
                                        });
                                    });
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchOnInternetPlugin.prototype.onunload = function () {
        console.log('unloading search-on-internet');
        this.app.workspace.offref(this.fileMenuEvent);
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
// class SampleModal extends Modal {
//   constructor(app: App) {
//     super(app);
//   }
//
//   onOpen() {
//     const {contentEl} = this;
//     contentEl.setText('Woah!');
//   }
//
//   onClose() {
//     const {contentEl} = this;
//     contentEl.empty();
//   }
// }
//

module.exports = SearchOnInternetPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNldHRpbmdzLnRzIiwibm9kZV9tb2R1bGVzL2lzLWRvY2tlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pcy13c2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvb3Blbi9pbmRleC5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHtBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmd9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCBTZWFyY2hPbkludGVybmV0UGx1Z2luIGZyb20gJy4vbWFpbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoU2V0dGluZyB7XG4gICAgdGFnczogc3RyaW5nW107XG4gICAgcXVlcnk6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU09JU2V0dGluZ3Mge1xuICAgIHNlYXJjaGVzOiBTZWFyY2hTZXR0aW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkc6IFNPSVNldHRpbmdzID0ge1xuICBzZWFyY2hlczogW3tcbiAgICB0YWdzOiBbXSBhcyBzdHJpbmdbXSxcbiAgICBxdWVyeTogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoPyZxPXt7dGl0bGV9fScsXG4gICAgbmFtZTogJ0dvb2dsZScsXG4gIH0gYXMgU2VhcmNoU2V0dGluZywge1xuICAgIHRhZ3M6IFtdIGFzIHN0cmluZ1tdLFxuICAgIHF1ZXJ5OiAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpTZWFyY2gve3t0aXRsZX19JyxcbiAgICBuYW1lOiAnV2lraXBlZGlhJyxcbiAgfSBhcyBTZWFyY2hTZXR0aW5nXSxcbn07XG5cbmNvbnN0IHBhcnNlVGFncyA9IGZ1bmN0aW9uKGlucHV0czogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gaW5wdXRzLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKHMpID0+IHMudHJpbSgpKVxuICAgICAgLmZpbHRlcigocykgPT4gL14jKFtBLVphLXpdKVxcdyskLy50ZXN0KHMpKTtcbn07XG5cblxuZXhwb3J0IGNsYXNzIFNPSVNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgICBwbHVnaW46IFNlYXJjaE9uSW50ZXJuZXRQbHVnaW47XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBTZWFyY2hPbkludGVybmV0UGx1Z2luKSB7XG4gICAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB9XG5cbiAgICBkaXNwbGF5KCk6IHZvaWQge1xuICAgICAgY29uc3Qge2NvbnRhaW5lckVsfSA9IHRoaXM7XG5cbiAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luO1xuXG4gICAgICAvLyBDb2RlIG1vc3RseSB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9TaWxlbnRWb2lkMTMvVGVtcGxhdGVyL2Jsb2IvbWFzdGVyL3NyYy9zZXR0aW5ncy50c1xuICAgICAgcGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzLmZvckVhY2goKHNlYXJjaCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBjb250YWluZXJFbC5jcmVhdGVFbCgnZGl2Jyk7XG4gICAgICAgIGRpdi5hZGRDbGFzcygnc29pX2RpdicpO1xuXG4gICAgICAgIC8vIGNvbnN0IHRpdGxlID0gY29udGFpbmVyRWwuY3JlYXRlRWwoJ2g0Jywge1xuICAgICAgICAvLyAgIHRleHQ6IHNlYXJjaC5uYW1lLFxuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbmV3IFNldHRpbmcoZGl2KS8vXG4gICAgICAgICAgICAuYWRkRXh0cmFCdXR0b24oKGV4dHJhKSA9PiB7XG4gICAgICAgICAgICAgIGV4dHJhLnNldEljb24oJ2Nyb3NzJylcbiAgICAgICAgICAgICAgICAgIC5zZXRUb29sdGlwKCdEZWxldGUnKVxuICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsdWdpbi5zZXR0aW5ncy5zZWFyY2hlcy5pbmRleE9mKHNlYXJjaCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3JjZSByZWZyZXNoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0LnNldFBsYWNlaG9sZGVyKCdTZWFyY2ggbmFtZScpXG4gICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoc2VhcmNoLm5hbWUpXG4gICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzLmluZGV4T2Yoc2VhcmNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gubmFtZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnNldE5hbWUoJ05hbWUnKVxuICAgICAgICAgICAgLnNldERlc2MoJ05hbWUgb2YgdGhlIHNlYXJjaC4gQ2xpY2sgdGhlIGNyb3NzIHRvIGRlbGV0ZSB0aGUgc2VhcmNoLicpO1xuICAgICAgICBuZXcgU2V0dGluZyhkaXYpXG4gICAgICAgICAgICAuYWRkVGV4dEFyZWEoKHRleHQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdCA9IHRleHQuc2V0UGxhY2Vob2xkZXIoJ1NlYXJjaCBxdWVyeScpXG4gICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoc2VhcmNoLnF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKChuZXdRdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsdWdpbi5zZXR0aW5ncy5zZWFyY2hlcy5pbmRleE9mKHNlYXJjaCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoLnF1ZXJ5ID0gbmV3UXVlcnk7XG4gICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdC5pbnB1dEVsLnNldEF0dHIoJ3Jvd3MnLCAyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHQ7Ly9cbiAgICAgICAgICAgIH0pLnNldE5hbWUoJ1VSTCcpXG4gICAgICAgICAgICAuc2V0RGVzYygnVVJMIHRvIG9wZW4gd2hlbiBleGVjdXRpbmcgdGhlIHNlYXJjaC4gVXNlIHt7dGl0bGV9fSB0byByZWZlciB0byB0aGUgdGl0bGUgb2YgdGhlIG5vdGUuJyk7XG4gICAgICAgIG5ldyBTZXR0aW5nKGRpdikuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0ZXh0LnNldFBsYWNlaG9sZGVyKCcnKVxuICAgICAgICAgICAgICAuc2V0VmFsdWUoc2VhcmNoLnRhZ3Muam9pbignLCAnKSlcbiAgICAgICAgICAgICAgLm9uQ2hhbmdlKChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzLmluZGV4T2Yoc2VhcmNoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgc2VhcmNoLnRhZ3MgPSBwYXJzZVRhZ3MobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnNldE5hbWUoJ1RhZ3MnKVxuICAgICAgICAgICAgLnNldERlc2MoJ09ubHkgYWRkIHNlYXJjaCB0byBub3RlcyB3aXRoIHRoZXNlIGNvbW1hLXNlcGFyYXRlZCB0YWdzLiBMZWF2ZSBlbXB0eSB0byB1c2UgYWxsIHRhZ3MuJyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGl2ID0gY29udGFpbmVyRWwuY3JlYXRlRWwoJ2RpdicpO1xuICAgICAgZGl2LmFkZENsYXNzKCdzb2lfZGl2MicpO1xuXG4gICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgLmFkZEJ1dHRvbigoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uLnNldEJ1dHRvblRleHQoJ0FkZCBTZWFyY2gnKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgICAgfSBhcyBTZWFyY2hTZXR0aW5nKTtcbiAgICAgICAgICAgICAgLy8gRm9yY2UgcmVmcmVzaFxuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgc2V0dGluZy5pbmZvRWwucmVtb3ZlKCk7XG5cbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXJFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxubGV0IGlzRG9ja2VyO1xuXG5mdW5jdGlvbiBoYXNEb2NrZXJFbnYoKSB7XG5cdHRyeSB7XG5cdFx0ZnMuc3RhdFN5bmMoJy8uZG9ja2VyZW52Jyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKF8pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFzRG9ja2VyQ0dyb3VwKCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBmcy5yZWFkRmlsZVN5bmMoJy9wcm9jL3NlbGYvY2dyb3VwJywgJ3V0ZjgnKS5pbmNsdWRlcygnZG9ja2VyJyk7XG5cdH0gY2F0Y2ggKF8pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdGlmIChpc0RvY2tlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0aXNEb2NrZXIgPSBoYXNEb2NrZXJFbnYoKSB8fCBoYXNEb2NrZXJDR3JvdXAoKTtcblx0fVxuXG5cdHJldHVybiBpc0RvY2tlcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBpc0RvY2tlciA9IHJlcXVpcmUoJ2lzLWRvY2tlcicpO1xuXG5jb25zdCBpc1dzbCA9ICgpID0+IHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdsaW51eCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAob3MucmVsZWFzZSgpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21pY3Jvc29mdCcpKSB7XG5cdFx0aWYgKGlzRG9ja2VyKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYygnL3Byb2MvdmVyc2lvbicsICd1dGY4JykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWljcm9zb2Z0JykgP1xuXHRcdFx0IWlzRG9ja2VyKCkgOiBmYWxzZTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuaWYgKHByb2Nlc3MuZW52Ll9fSVNfV1NMX1RFU1RfXykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGlzV3NsO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBpc1dzbCgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgY2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgaXNXc2wgPSByZXF1aXJlKCdpcy13c2wnKTtcbmNvbnN0IGlzRG9ja2VyID0gcmVxdWlyZSgnaXMtZG9ja2VyJyk7XG5cbmNvbnN0IHBBY2Nlc3MgPSBwcm9taXNpZnkoZnMuYWNjZXNzKTtcbmNvbnN0IHBFeGVjRmlsZSA9IHByb21pc2lmeShjaGlsZFByb2Nlc3MuZXhlY0ZpbGUpO1xuXG4vLyBQYXRoIHRvIGluY2x1ZGVkIGB4ZGctb3BlbmAuXG5jb25zdCBsb2NhbFhkZ09wZW5QYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3hkZy1vcGVuJyk7XG5cbi8vIENvbnZlcnQgYSBwYXRoIGZyb20gV1NMIGZvcm1hdCB0byBXaW5kb3dzIGZvcm1hdDpcbi8vIGAvbW50L2MvUHJvZ3JhbSBGaWxlcy9FeGFtcGxlL015QXBwLmV4ZWAg4oaSIGBDOlxcUHJvZ3JhbSBGaWxlc1xcRXhhbXBsZVxcTXlBcHAuZXhlYFxuY29uc3Qgd3NsVG9XaW5kb3dzUGF0aCA9IGFzeW5jIHBhdGggPT4ge1xuXHRjb25zdCB7c3Rkb3V0fSA9IGF3YWl0IHBFeGVjRmlsZSgnd3NscGF0aCcsIFsnLXcnLCBwYXRoXSk7XG5cdHJldHVybiBzdGRvdXQudHJpbSgpO1xufTtcblxuLy8gQ29udmVydCBhIHBhdGggZnJvbSBXaW5kb3dzIGZvcm1hdCB0byBXU0wgZm9ybWF0XG5jb25zdCB3aW5kb3dzVG9Xc2xQYXRoID0gYXN5bmMgcGF0aCA9PiB7XG5cdGNvbnN0IHtzdGRvdXR9ID0gYXdhaXQgcEV4ZWNGaWxlKCd3c2xwYXRoJywgW3BhdGhdKTtcblx0cmV0dXJuIHN0ZG91dC50cmltKCk7XG59O1xuXG4vLyBHZXQgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUgZnJvbSBXaW5kb3dzXG5jb25zdCB3c2xHZXRXaW5kb3dzRW52VmFyID0gYXN5bmMgZW52VmFyID0+IHtcblx0Y29uc3Qge3N0ZG91dH0gPSBhd2FpdCBwRXhlY0ZpbGUoJ3dzbHZhcicsIFtlbnZWYXJdKTtcblx0cmV0dXJuIHN0ZG91dC50cmltKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jICh0YXJnZXQsIG9wdGlvbnMpID0+IHtcblx0aWYgKHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBgdGFyZ2V0YCcpO1xuXHR9XG5cblx0b3B0aW9ucyA9IHtcblx0XHR3YWl0OiBmYWxzZSxcblx0XHRiYWNrZ3JvdW5kOiBmYWxzZSxcblx0XHRhbGxvd05vbnplcm9FeGl0Q29kZTogZmFsc2UsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGxldCBjb21tYW5kO1xuXHRsZXQge2FwcH0gPSBvcHRpb25zO1xuXHRsZXQgYXBwQXJndW1lbnRzID0gW107XG5cdGNvbnN0IGNsaUFyZ3VtZW50cyA9IFtdO1xuXHRjb25zdCBjaGlsZFByb2Nlc3NPcHRpb25zID0ge307XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoYXBwKSkge1xuXHRcdGFwcEFyZ3VtZW50cyA9IGFwcC5zbGljZSgxKTtcblx0XHRhcHAgPSBhcHBbMF07XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcblx0XHRjb21tYW5kID0gJ29wZW4nO1xuXG5cdFx0aWYgKG9wdGlvbnMud2FpdCkge1xuXHRcdFx0Y2xpQXJndW1lbnRzLnB1c2goJy0td2FpdC1hcHBzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMuYmFja2dyb3VuZCkge1xuXHRcdFx0Y2xpQXJndW1lbnRzLnB1c2goJy0tYmFja2dyb3VuZCcpO1xuXHRcdH1cblxuXHRcdGlmIChhcHApIHtcblx0XHRcdGNsaUFyZ3VtZW50cy5wdXNoKCctYScsIGFwcCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgfHwgKGlzV3NsICYmICFpc0RvY2tlcigpKSkge1xuXHRcdGNvbnN0IHdpbmRvd3NSb290ID0gaXNXc2wgPyBhd2FpdCB3c2xHZXRXaW5kb3dzRW52VmFyKCdzeXN0ZW1yb290JykgOiBwcm9jZXNzLmVudi5TWVNURU1ST09UO1xuXHRcdGNvbW1hbmQgPSBTdHJpbmcucmF3YCR7d2luZG93c1Jvb3R9XFxTeXN0ZW0zMlxcV2luZG93c1Bvd2VyU2hlbGxcXHYxLjBcXHBvd2Vyc2hlbGwke2lzV3NsID8gJy5leGUnIDogJyd9YDtcblx0XHRjbGlBcmd1bWVudHMucHVzaChcblx0XHRcdCctTm9Qcm9maWxlJyxcblx0XHRcdCctTm9uSW50ZXJhY3RpdmUnLFxuXHRcdFx0J+KAk0V4ZWN1dGlvblBvbGljeScsXG5cdFx0XHQnQnlwYXNzJyxcblx0XHRcdCctRW5jb2RlZENvbW1hbmQnXG5cdFx0KTtcblxuXHRcdGlmIChpc1dzbCkge1xuXHRcdFx0Y29tbWFuZCA9IGF3YWl0IHdpbmRvd3NUb1dzbFBhdGgoY29tbWFuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkUHJvY2Vzc09wdGlvbnMud2luZG93c1ZlcmJhdGltQXJndW1lbnRzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlbmNvZGVkQXJndW1lbnRzID0gWydTdGFydCddO1xuXG5cdFx0aWYgKG9wdGlvbnMud2FpdCkge1xuXHRcdFx0ZW5jb2RlZEFyZ3VtZW50cy5wdXNoKCctV2FpdCcpO1xuXHRcdH1cblxuXHRcdGlmIChhcHApIHtcblx0XHRcdGlmIChpc1dzbCAmJiBhcHAuc3RhcnRzV2l0aCgnLycpKSB7XG5cdFx0XHRcdGNvbnN0IHdpbmRvd3NQYXRoID0gYXdhaXQgd3NsVG9XaW5kb3dzUGF0aChhcHApO1xuXHRcdFx0XHRhcHAgPSB3aW5kb3dzUGF0aDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRG91YmxlIHF1b3RlIHdpdGggZG91YmxlIHF1b3RlcyB0byBlbnN1cmUgdGhlIGlubmVyIHF1b3RlcyBhcmUgcGFzc2VkIHRocm91Z2guXG5cdFx0XHQvLyBJbm5lciBxdW90ZXMgYXJlIGRlbGltaXRlZCBmb3IgUG93ZXJTaGVsbCBpbnRlcnByZXRhdGlvbiB3aXRoIGJhY2t0aWNrcy5cblx0XHRcdGVuY29kZWRBcmd1bWVudHMucHVzaChgXCJcXGBcIiR7YXBwfVxcYFwiXCJgLCAnLUFyZ3VtZW50TGlzdCcpO1xuXHRcdFx0YXBwQXJndW1lbnRzLnVuc2hpZnQodGFyZ2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5jb2RlZEFyZ3VtZW50cy5wdXNoKGBcIlxcYFwiJHt0YXJnZXR9XFxgXCJcImApO1xuXHRcdH1cblxuXHRcdGlmIChhcHBBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0YXBwQXJndW1lbnRzID0gYXBwQXJndW1lbnRzLm1hcChhcmcgPT4gYFwiXFxgXCIke2FyZ31cXGBcIlwiYCk7XG5cdFx0XHRlbmNvZGVkQXJndW1lbnRzLnB1c2goYXBwQXJndW1lbnRzLmpvaW4oJywnKSk7XG5cdFx0fVxuXG5cdFx0Ly8gVXNpbmcgQmFzZTY0LWVuY29kZWQgY29tbWFuZCwgYWNjZXB0ZWQgYnkgUG93ZXJTaGVsbCwgdG8gYWxsb3cgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuXHRcdHRhcmdldCA9IEJ1ZmZlci5mcm9tKGVuY29kZWRBcmd1bWVudHMuam9pbignICcpLCAndXRmMTZsZScpLnRvU3RyaW5nKCdiYXNlNjQnKTtcblx0fSBlbHNlIHtcblx0XHRpZiAoYXBwKSB7XG5cdFx0XHRjb21tYW5kID0gYXBwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBXaGVuIGJ1bmRsZWQgYnkgV2VicGFjaywgdGhlcmUncyBubyBhY3R1YWwgcGFja2FnZSBmaWxlIHBhdGggYW5kIG5vIGxvY2FsIGB4ZGctb3BlbmAuXG5cdFx0XHRjb25zdCBpc0J1bmRsZWQgPSAhX19kaXJuYW1lIHx8IF9fZGlybmFtZSA9PT0gJy8nO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBsb2NhbCBgeGRnLW9wZW5gIGV4aXN0cyBhbmQgaXMgZXhlY3V0YWJsZS5cblx0XHRcdGxldCBleGVMb2NhbFhkZ09wZW4gPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHBBY2Nlc3MobG9jYWxYZGdPcGVuUGF0aCwgZnMuY29uc3RhbnRzLlhfT0spO1xuXHRcdFx0XHRleGVMb2NhbFhkZ09wZW4gPSB0cnVlO1xuXHRcdFx0fSBjYXRjaCAoXykge31cblxuXHRcdFx0Y29uc3QgdXNlU3lzdGVtWGRnT3BlbiA9IHByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb24gfHxcblx0XHRcdFx0cHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnIHx8IGlzQnVuZGxlZCB8fCAhZXhlTG9jYWxYZGdPcGVuO1xuXHRcdFx0Y29tbWFuZCA9IHVzZVN5c3RlbVhkZ09wZW4gPyAneGRnLW9wZW4nIDogbG9jYWxYZGdPcGVuUGF0aDtcblx0XHR9XG5cblx0XHRpZiAoYXBwQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNsaUFyZ3VtZW50cy5wdXNoKC4uLmFwcEFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFvcHRpb25zLndhaXQpIHtcblx0XHRcdC8vIGB4ZGctb3BlbmAgd2lsbCBibG9jayB0aGUgcHJvY2VzcyB1bmxlc3Mgc3RkaW8gaXMgaWdub3JlZFxuXHRcdFx0Ly8gYW5kIGl0J3MgZGV0YWNoZWQgZnJvbSB0aGUgcGFyZW50IGV2ZW4gaWYgaXQncyB1bnJlZidkLlxuXHRcdFx0Y2hpbGRQcm9jZXNzT3B0aW9ucy5zdGRpbyA9ICdpZ25vcmUnO1xuXHRcdFx0Y2hpbGRQcm9jZXNzT3B0aW9ucy5kZXRhY2hlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Y2xpQXJndW1lbnRzLnB1c2godGFyZ2V0KTtcblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicgJiYgYXBwQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRjbGlBcmd1bWVudHMucHVzaCgnLS1hcmdzJywgLi4uYXBwQXJndW1lbnRzKTtcblx0fVxuXG5cdGNvbnN0IHN1YnByb2Nlc3MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgY2xpQXJndW1lbnRzLCBjaGlsZFByb2Nlc3NPcHRpb25zKTtcblxuXHRpZiAob3B0aW9ucy53YWl0KSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHN1YnByb2Nlc3Mub25jZSgnZXJyb3InLCByZWplY3QpO1xuXG5cdFx0XHRzdWJwcm9jZXNzLm9uY2UoJ2Nsb3NlJywgZXhpdENvZGUgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5hbGxvd05vbnplcm9FeGl0Q29kZSAmJiBleGl0Q29kZSA+IDApIHtcblx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKGBFeGl0ZWQgd2l0aCBjb2RlICR7ZXhpdENvZGV9YCkpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc29sdmUoc3VicHJvY2Vzcyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHN1YnByb2Nlc3MudW5yZWYoKTtcblxuXHRyZXR1cm4gc3VicHJvY2Vzcztcbn07XG4iLCJpbXBvcnQge0V2ZW50UmVmLCBQbHVnaW4sIFRGaWxlfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQge1NPSVNldHRpbmdUYWIsIFNPSVNldHRpbmdzLCBERUZBVUxUX1NFVFRJTkd9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IG9wZW4gZnJvbSAnb3Blbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoT25JbnRlcm5ldFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gICAgc2V0dGluZ3M6IFNPSVNldHRpbmdzO1xuICAgIGZpbGVNZW51RXZlbnQ6IEV2ZW50UmVmO1xuXG4gICAgYXN5bmMgb25sb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgc2VhcmNoLW9uLWludGVybmV0Jyk7XG5cbiAgICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU09JU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgICB0aGlzLmZpbGVNZW51RXZlbnQ9dGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW1lbnUnLCAobWVudSwgZmlsZTogVEZpbGUsIHNvdXJjZTpzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZVRhZ3MgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKVxuICAgICAgICAgICAgPy50YWdzPy5tYXAoKHQpID0+IHQudGFnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZWFyY2hlcy5mb3JFYWNoKChzZWFyY2gpID0+IHtcbiAgICAgICAgICBpZiAoc2VhcmNoLnRhZ3MubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgIGZpbGVUYWdzPy5zb21lKCh0KSA9PiBzZWFyY2gudGFncy5jb250YWlucyh0KSkpIHtcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpdGVtLnNldFRpdGxlKGBTZWFyY2ggJHtzZWFyY2gubmFtZX1gKS5zZXRJY29uKCdzZWFyY2gnKVxuICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBzZWFyY2gucXVlcnkucmVwbGFjZSgne3t0aXRsZX19JywgZW5jb2RlVVJJQ29tcG9uZW50KGZpbGUuYmFzZW5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNPSTogT3BlbmluZyBVUkwgJHt1cmx9YCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW4odXJsKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9udW5sb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ3VubG9hZGluZyBzZWFyY2gtb24taW50ZXJuZXQnKTtcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vZmZyZWYodGhpcy5maWxlTWVudUV2ZW50KTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICBjb25zdCBsb2FkZWRTZXR0aW5ncyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKSBhcyBhbnk7XG4gICAgICBpZiAobG9hZGVkU2V0dGluZ3MgJiYgbG9hZGVkU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3NlYXJjaGVzJykpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGxvYWRlZFNldHRpbmdzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IERFRkFVTFRfU0VUVElORztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cblxuLy8gY2xhc3MgU2FtcGxlTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4vLyAgIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG4vLyAgICAgc3VwZXIoYXBwKTtcbi8vICAgfVxuLy9cbi8vICAgb25PcGVuKCkge1xuLy8gICAgIGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcbi8vICAgICBjb250ZW50RWwuc2V0VGV4dCgnV29haCEnKTtcbi8vICAgfVxuLy9cbi8vICAgb25DbG9zZSgpIHtcbi8vICAgICBjb25zdCB7Y29udGVudEVsfSA9IHRoaXM7XG4vLyAgICAgY29udGVudEVsLmVtcHR5KCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJmcyIsIm9zIiwiaXNEb2NrZXIiLCJyZXF1aXJlJCQwIiwiY2hpbGRQcm9jZXNzIiwicGF0aCIsImlzV3NsIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMs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
