'use strict';

var obsidian = require('obsidian');

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

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var TextExpander = /** @class */ (function (_super) {
    __extends(TextExpander, _super);
    function TextExpander(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.delay = 2000;
        _this.lineEnding = '<--->';
        _this.search = _this.search.bind(_this);
        _this.initExpander = _this.initExpander.bind(_this);
        _this.getLastLineNum = _this.getLastLineNum.bind(_this);
        _this.reformatLinks = _this.reformatLinks.bind(_this);
        return _this;
    }
    TextExpander.prototype.reformatLinks = function (links, mapFunc) {
        var _a, _b, _c, _d;
        if (mapFunc === void 0) { mapFunc = function (s) { return '[[' + s + ']]'; }; }
        var currentView = this.app.workspace.activeLeaf.view;
        if (currentView instanceof obsidian.FileView) {
            return (_b = (_a = links === null || links === void 0 ? void 0 : links.map(function (e) { return e.basename; }).filter(function (e) { return currentView.file.basename !== e; })) === null || _a === void 0 ? void 0 : _a.map(mapFunc)) === null || _b === void 0 ? void 0 : _b.join('\n');
        }
        return (_d = (_c = links === null || links === void 0 ? void 0 : links.map(function (e) { return e.basename; })) === null || _c === void 0 ? void 0 : _c.map(mapFunc)) === null || _d === void 0 ? void 0 : _d.join('\n');
    };
    TextExpander.prototype.getFstLineNum = function (doc, line) {
        if (line === void 0) { line = 0; }
        var lineNum = line === 0
            ? doc.getCursor().line
            : line;
        if (doc.lineCount() === lineNum) {
            return doc.getCursor().line + 1;
        }
        return doc.getLine(lineNum) === '```'
            ? lineNum + 1
            : this.getFstLineNum(doc, lineNum + 1);
    };
    TextExpander.prototype.getLastLineNum = function (doc, line) {
        if (line === void 0) { line = 0; }
        var lineNum = line === 0
            ? doc.getCursor().line
            : line;
        if (doc.lineCount() === lineNum) {
            return doc.getCursor().line + 1;
        }
        return doc.getLine(lineNum) === this.lineEnding
            ? lineNum
            : this.getLastLineNum(doc, lineNum + 1);
    };
    TextExpander.prototype.getLinesOffsetToGoal = function (start, goal, step) {
        if (step === void 0) { step = 1; }
        var lineCount = this.cm.lineCount();
        var offset = 0;
        while (!isNaN(start + offset) && start + offset < lineCount && start + offset >= 0) {
            var result = goal === this.cm.getLine(start + offset);
            if (result) {
                return offset;
            }
            offset += step;
        }
        return start;
    };
    TextExpander.prototype.getContentBetweenLines = function (fromLineNum, startLine, endLine) {
        var _a;
        var cm = this.cm;
        var topOffset = this.getLinesOffsetToGoal(fromLineNum, startLine, -1);
        var botOffset = this.getLinesOffsetToGoal(fromLineNum, endLine, 1);
        var topLine = fromLineNum + topOffset + 1;
        var botLine = fromLineNum + botOffset - 1;
        return cm.getRange({ line: topLine || fromLineNum, ch: 0 }, { line: botLine || fromLineNum, ch: (_a = cm.getLine(botLine)) === null || _a === void 0 ? void 0 : _a.length });
    };
    TextExpander.prototype.search = function (s) {
        // @ts-ignore
        var globalSearchFn = this.app.internalPlugins.getPluginById('global-search').instance.openGlobalSearch.bind(this);
        var search = function (query) { return globalSearchFn(query); };
        search(s);
    };
    TextExpander.prototype.getFoundAfterDelay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchLeaf, view;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchLeaf = this.app.workspace.getLeavesOfType('search')[0];
                        return [4 /*yield*/, searchLeaf.open(searchLeaf.view)];
                    case 1:
                        view = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                // @ts-ignore
                                setTimeout(function () { return resolve(Array.from(view.dom.resultDomLookup.keys())); }, _this.delay);
                            })];
                }
            });
        });
    };
    TextExpander.prototype.checkTemplateMode = function (content) {
        var hasTemplate = content.split('\n').length > 1;
        if (!hasTemplate) {
            return false;
        }
        return true;
    };
    TextExpander.prototype.startTemplateMode = function (content, n) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, searchFormula, templateContent, files, currentView, currentFileName, heading, footer, repeatableContent, filesWithoutCurrent, getFrontMatter, format, changed, result, fstLine, lstLine;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __read(content.split('\n')), searchFormula = _a[0], templateContent = _a.slice(1);
                        this.search(searchFormula.replace(/[\{\{|\}\}]/g, ''));
                        return [4 /*yield*/, this.getFoundAfterDelay()];
                    case 1:
                        files = _b.sent();
                        currentView = this.app.workspace.activeLeaf.view;
                        currentFileName = '';
                        heading = templateContent.filter(function (e) { return e[0] === '^'; }).map(function (_a) {
                            var _b = __read(_a), _ = _b[0], tail = _b.slice(1);
                            return tail;
                        });
                        footer = templateContent.filter(function (e) { return e[0] === '>'; }).map(function (_a) {
                            var _b = __read(_a), _ = _b[0], tail = _b.slice(1);
                            return tail;
                        });
                        repeatableContent = templateContent.filter(function (e) { return e[0] !== '^' && e[0] !== '>'; });
                        if (currentView instanceof obsidian.FileView) {
                            currentFileName = currentView.file.basename;
                        }
                        filesWithoutCurrent = files.filter(function (file) { return file.basename !== currentFileName; });
                        getFrontMatter = function (s, r) {
                            // @ts-ignore
                            var _a = _this.app.metadataCache.getCache(r.path).frontmatter, frontmatter = _a === void 0 ? null : _a;
                            if (frontmatter) {
                                return frontmatter[s.split(':')[1]] || '';
                            }
                            return '';
                        };
                        format = function (r, s) { return s
                            .replace(/\$filename/g, r.basename)
                            .replace(/\$letters:\d+/g, 
                        // @ts-ignore
                        function (str) { return r.cachedData
                            .split('')
                            .filter(function (_, i) { return i < Number(str.split(':')[1]); })
                            .join(''); })
                            .replace(/\$lines:\d+/g, 
                        // @ts-ignore
                        function (str) { return r.cachedData
                            .split('\n')
                            .filter(function (_, i) { return i < Number(str.split(':')[1]); })
                            .join('\n')
                            .replace(new RegExp(_this.lineEnding, 'g'), ''); })
                            // @ts-ignore
                            .replace(/\$frontmatter:[a-zA-Z0-9_-]+/, function (s) { return getFrontMatter(s, r); })
                            // @ts-ignore
                            .replace(/\$letters+/g, r.cachedData.replace(new RegExp(_this.lineEnding, 'g'), ''))
                            // @ts-ignore
                            .replace(/\$lines+/g, r.cachedData.replace(new RegExp(_this.lineEnding, 'g'), ''))
                            .replace(/\$ext/g, r.extension)
                            .replace(/\$created/g, String(r.stat.ctime))
                            .replace(/\$size/g, String(r.stat.size))
                            .replace(/\$path/g, r.path)
                            .replace(/\$parent/g, r.parent.name); };
                        changed = filesWithoutCurrent.map(function (file) { return repeatableContent.map(function (s) { return format(file, s); }).join('\n'); });
                        result = heading.join('\n') + '\n' + changed.join('\n') + '\n' + footer.join('\n') + '\n\n' + this.lineEnding;
                        fstLine = this.getFstLineNum(this.cm, n);
                        lstLine = this.getLastLineNum(this.cm, fstLine);
                        this.cm.replaceRange(result, { line: fstLine, ch: 0 }, { line: lstLine, ch: this.cm.getLine(lstLine).length });
                        return [2 /*return*/];
                }
            });
        });
    };
    TextExpander.prototype.startSimpleMode = function (cmDoc, isEmbed, curNum, curText) {
        var _this = this;
        var _a = this, reformatLinks = _a.reformatLinks, getLastLineNum = _a.getLastLineNum, search = _a.search;
        var getFoundFilenames = function (callback) {
            var searchLeaf = _this.app.workspace.getLeavesOfType('search')[0];
            searchLeaf.open(searchLeaf.view)
                .then(function (view) { return setTimeout(function () {
                // @ts-ignore
                var result = reformatLinks(Array.from(view.dom.resultDomLookup.keys()));
                callback(result);
            }, _this.delay); });
        };
        var replaceLine = function (content) { return cmDoc.replaceRange(embedFormula + content + '\n\n' + _this.lineEnding, { line: fstLineNumToReplace, ch: 0 }, { line: lstLineNumToReplace, ch: cmDoc.getLine(lstLineNumToReplace).length }); };
        var fstLineNumToReplace = isEmbed
            ? curNum - 1
            : curNum;
        var lstLineNumToReplace = isEmbed
            ? getLastLineNum(cmDoc)
            : curNum;
        var searchQuery = curText.replace('{{', '').replace('}}', '');
        var embedFormula = '```expander\n' +
            '{{' + searchQuery + '}}\n' +
            '```\n';
        search(searchQuery);
        getFoundFilenames(replaceLine);
    };
    TextExpander.prototype.initExpander = function () {
        var currentView = this.app.workspace.activeLeaf.view;
        if (!(currentView instanceof obsidian.MarkdownView)) {
            return;
        }
        var cmDoc = this.cm = currentView.sourceMode.cmEditor;
        var curNum = cmDoc.getCursor().line;
        var curText = cmDoc.getLine(curNum);
        var workingLine = this.getContentBetweenLines(curNum, '```expander', '```') || curText;
        var hasFormulaRegexp = /^{{.+}}/;
        var isEmbed = workingLine.split('\n').length > 1 || cmDoc.getLine(curNum - 1) === '```expander';
        if (!hasFormulaRegexp.test(workingLine)) {
            return;
        }
        if (isEmbed && this.checkTemplateMode(workingLine)) {
            this.startTemplateMode(workingLine, curNum);
            return;
        }
        this.startSimpleMode(cmDoc, isEmbed, curNum, curText);
    };
    TextExpander.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addSettingTab(new SettingTab(this.app, this));
                        this.addCommand({
                            id: 'editor-expand',
                            name: 'expand',
                            callback: this.initExpander,
                            hotkeys: []
                        });
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        data = _a.sent();
                        this.delay = (data === null || data === void 0 ? void 0 : data.delay) || 2000;
                        this.lineEnding = data.lineEnding || '<--->';
                        return [2 /*return*/];
                }
            });
        });
    };
    TextExpander.prototype.onunload = function () {
        console.log('unloading plugin');
    };
    return TextExpander;
}(obsidian.Plugin));
var SettingTab = /** @class */ (function (_super) {
    __extends(SettingTab, _super);
    function SettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.app = app;
        _this.plugin = plugin;
        return _this;
    }
    SettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Settings for Text Expander' });
        new obsidian.Setting(containerEl)
            .setName('Delay')
            .setDesc('Text expander don\' wait until search completed. It waits for a delay and paste result after that.')
            .addSlider(function (slider) {
            slider.setLimits(1000, 10000, 1000);
            slider.setValue(_this.plugin.delay);
            slider.onChange(function (value) {
                _this.plugin.delay = value;
                _this.plugin.saveData({ delay: value });
            });
            slider.setDynamicTooltip();
        });
        new obsidian.Setting(containerEl)
            .setName('Line ending')
            .setDesc('You can specify the text which will appear at the bottom of the generated text.')
            .addText(function (text) {
            text.setValue(_this.plugin.lineEnding)
                .onChange(function (val) {
                _this.plugin.lineEnding = val;
                _this.plugin.saveData({ delay: _this.plugin.delay, lineEnding: val });
            });
        });
    };
    return SettingTab;
}(obsidian.PluginSettingTab));

module.exports = TextExpander;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEFwcCxcclxuICAgIFZpZXcsXHJcbiAgICBQbHVnaW4sXHJcbiAgICBQbHVnaW5TZXR0aW5nVGFiLFxyXG4gICAgU2V0dGluZyxcclxuICAgIFRGaWxlLFxyXG4gICAgRmlsZVZpZXcsXHJcbiAgICBNYXJrZG93blZpZXcsXHJcbiAgICBQbHVnaW5NYW5pZmVzdCxcclxuICAgIE1ldGFkYXRhQ2FjaGVcclxufSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5pbnRlcmZhY2UgRmlsZXMge1xyXG4gICAgZmlsZTogVEZpbGVcclxufVxyXG5cclxuZnVuY3Rpb24gaW5saW5lTG9nKHN0cjogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdHIpXHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFeHBhbmRlciBleHRlbmRzIFBsdWdpbiB7XHJcbiAgICBkZWxheSA9IDIwMDA7XHJcbiAgICBjbTogQ29kZU1pcnJvci5FZGl0b3JcclxuICAgIGxpbmVFbmRpbmcgPSAnPC0tLT4nXHJcblxyXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogUGx1Z2luTWFuaWZlc3QpIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyID0gdGhpcy5pbml0RXhwYW5kZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ2V0TGFzdExpbmVOdW0gPSB0aGlzLmdldExhc3RMaW5lTnVtLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnJlZm9ybWF0TGlua3MgPSB0aGlzLnJlZm9ybWF0TGlua3MuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlZm9ybWF0TGlua3MobGlua3M6IFRGaWxlW10sIG1hcEZ1bmMgPSAoczogc3RyaW5nKSA9PiAnW1snICsgcyArICddXScpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmLnZpZXdcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRWaWV3IGluc3RhbmNlb2YgRmlsZVZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpbmtzPy5tYXAoZSA9PiBlLmJhc2VuYW1lKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihlID0+IGN1cnJlbnRWaWV3LmZpbGUuYmFzZW5hbWUgIT09IGUpXHJcbiAgICAgICAgICAgICAgICA/Lm1hcChtYXBGdW5jKT8uam9pbignXFxuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5rcz8ubWFwKGUgPT4gZS5iYXNlbmFtZSk/Lm1hcChtYXBGdW5jKT8uam9pbignXFxuJylcclxuICAgIH1cclxuXHJcbiAgICBnZXRGc3RMaW5lTnVtKGRvYzogQ29kZU1pcnJvci5Eb2MsIGxpbmUgPSAwKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBsaW5lTnVtID0gbGluZSA9PT0gMFxyXG4gICAgICAgICAgICA/IGRvYy5nZXRDdXJzb3IoKS5saW5lXHJcbiAgICAgICAgICAgIDogbGluZVxyXG5cclxuICAgICAgICBpZiAoZG9jLmxpbmVDb3VudCgpID09PSBsaW5lTnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuZ2V0Q3Vyc29yKCkubGluZSArIDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2MuZ2V0TGluZShsaW5lTnVtKSA9PT0gJ2BgYCdcclxuICAgICAgICAgICAgPyBsaW5lTnVtICsgMVxyXG4gICAgICAgICAgICA6IHRoaXMuZ2V0RnN0TGluZU51bShkb2MsIGxpbmVOdW0gKyAxKVxyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RMaW5lTnVtKGRvYzogQ29kZU1pcnJvci5Eb2MsIGxpbmUgPSAwKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBsaW5lTnVtID0gbGluZSA9PT0gMFxyXG4gICAgICAgICAgICA/IGRvYy5nZXRDdXJzb3IoKS5saW5lXHJcbiAgICAgICAgICAgIDogbGluZVxyXG5cclxuICAgICAgICBpZiAoZG9jLmxpbmVDb3VudCgpID09PSBsaW5lTnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuZ2V0Q3Vyc29yKCkubGluZSArIDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2MuZ2V0TGluZShsaW5lTnVtKSA9PT0gdGhpcy5saW5lRW5kaW5nXHJcbiAgICAgICAgICAgID8gbGluZU51bVxyXG4gICAgICAgICAgICA6IHRoaXMuZ2V0TGFzdExpbmVOdW0oZG9jLCBsaW5lTnVtICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaW5lc09mZnNldFRvR29hbChzdGFydDogbnVtYmVyLCBnb2FsOiBzdHJpbmcsIHN0ZXAgPSAxKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBsaW5lQ291bnQgPSB0aGlzLmNtLmxpbmVDb3VudCgpXHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcclxuXHJcbiAgICAgICAgd2hpbGUgKCFpc05hTihzdGFydCArIG9mZnNldCkgJiYgc3RhcnQgKyBvZmZzZXQgPCBsaW5lQ291bnQgJiYgc3RhcnQgKyBvZmZzZXQgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBnb2FsID09PSB0aGlzLmNtLmdldExpbmUoc3RhcnQgKyBvZmZzZXQpXHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2Zmc2V0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9mZnNldCArPSBzdGVwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhcnRcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZW50QmV0d2VlbkxpbmVzKGZyb21MaW5lTnVtOiBudW1iZXIsIHN0YXJ0TGluZTogc3RyaW5nLCBlbmRMaW5lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB7Y219ID0gdGhpc1xyXG4gICAgICAgIGNvbnN0IHRvcE9mZnNldCA9IHRoaXMuZ2V0TGluZXNPZmZzZXRUb0dvYWwoZnJvbUxpbmVOdW0sIHN0YXJ0TGluZSwgLTEpXHJcbiAgICAgICAgY29uc3QgYm90T2Zmc2V0ID0gdGhpcy5nZXRMaW5lc09mZnNldFRvR29hbChmcm9tTGluZU51bSwgZW5kTGluZSwgMSlcclxuXHJcbiAgICAgICAgY29uc3QgdG9wTGluZSA9IGZyb21MaW5lTnVtICsgdG9wT2Zmc2V0ICsgMVxyXG4gICAgICAgIGNvbnN0IGJvdExpbmUgPSBmcm9tTGluZU51bSArIGJvdE9mZnNldCAtIDFcclxuXHJcbiAgICAgICAgcmV0dXJuIGNtLmdldFJhbmdlKHtsaW5lOiB0b3BMaW5lIHx8IGZyb21MaW5lTnVtLCBjaDogMH0sXHJcbiAgICAgICAgICAgIHtsaW5lOiBib3RMaW5lIHx8IGZyb21MaW5lTnVtLCBjaDogY20uZ2V0TGluZShib3RMaW5lKT8ubGVuZ3RoIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKHM6IHN0cmluZykge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBjb25zdCBnbG9iYWxTZWFyY2hGbiA9IHRoaXMuYXBwLmludGVybmFsUGx1Z2lucy5nZXRQbHVnaW5CeUlkKCdnbG9iYWwtc2VhcmNoJykuaW5zdGFuY2Uub3Blbkdsb2JhbFNlYXJjaC5iaW5kKHRoaXMpXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gKHF1ZXJ5OiBzdHJpbmcpID0+IGdsb2JhbFNlYXJjaEZuKHF1ZXJ5KVxyXG5cclxuICAgICAgICBzZWFyY2gocylcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRGb3VuZEFmdGVyRGVsYXkoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoTGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoJ3NlYXJjaCcpWzBdXHJcbiAgICAgICAgY29uc3QgdmlldyA9IGF3YWl0IHNlYXJjaExlYWYub3BlbihzZWFyY2hMZWFmLnZpZXcpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShBcnJheS5mcm9tKHZpZXcuZG9tLnJlc3VsdERvbUxvb2t1cC5rZXlzKCkpKSwgdGhpcy5kZWxheSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVGVtcGxhdGVNb2RlKGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGhhc1RlbXBsYXRlID0gY29udGVudC5zcGxpdCgnXFxuJykubGVuZ3RoID4gMVxyXG5cclxuICAgICAgICBpZiAoIWhhc1RlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydFRlbXBsYXRlTW9kZShjb250ZW50OiBzdHJpbmcsIG46IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IFtzZWFyY2hGb3JtdWxhLCAuLi50ZW1wbGF0ZUNvbnRlbnRdID0gY29udGVudC5zcGxpdCgnXFxuJylcclxuICAgICAgICB0aGlzLnNlYXJjaChzZWFyY2hGb3JtdWxhLnJlcGxhY2UoL1tcXHtcXHt8XFx9XFx9XS9nLCAnJykpXHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgdGhpcy5nZXRGb3VuZEFmdGVyRGVsYXkoKSBhcyBURmlsZVtdXHJcbiAgICAgICAgY29uc3QgY3VycmVudFZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZi52aWV3XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGaWxlTmFtZSA9ICcnXHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSB0ZW1wbGF0ZUNvbnRlbnQuZmlsdGVyKGUgPT4gZVswXSA9PT0gJ14nKS5tYXAoKFtfLCAuLi50YWlsXSkgPT4gdGFpbClcclxuICAgICAgICBjb25zdCBmb290ZXIgPSB0ZW1wbGF0ZUNvbnRlbnQuZmlsdGVyKGUgPT4gZVswXSA9PT0gJz4nKS5tYXAoKFtfLCAuLi50YWlsXSkgPT4gdGFpbClcclxuICAgICAgICBjb25zdCByZXBlYXRhYmxlQ29udGVudCA9IHRlbXBsYXRlQ29udGVudC5maWx0ZXIoZSA9PiBlWzBdICE9PSAnXicgJiYgZVswXSAhPT0gJz4nKVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFZpZXcgaW5zdGFuY2VvZiBGaWxlVmlldykge1xyXG4gICAgICAgICAgICBjdXJyZW50RmlsZU5hbWUgPSBjdXJyZW50Vmlldy5maWxlLmJhc2VuYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWxlc1dpdGhvdXRDdXJyZW50ID0gZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5iYXNlbmFtZSAhPT0gY3VycmVudEZpbGVOYW1lKVxyXG5cclxuICAgICAgICBjb25zdCBnZXRGcm9udE1hdHRlciA9IChzOiBzdHJpbmcsIHI6IFRGaWxlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29uc3QgeyBmcm9udG1hdHRlciA9IG51bGwgfSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Q2FjaGUoci5wYXRoKVxyXG5cclxuICAgICAgICAgICAgaWYgKGZyb250bWF0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbnRtYXR0ZXJbcy5zcGxpdCgnOicpWzFdXSB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXQgPSAocjogVEZpbGUsIHM6IHN0cmluZykgPT4gc1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwkZmlsZW5hbWUvZywgci5iYXNlbmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcJGxldHRlcnM6XFxkKy9nLFxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBzdHIgPT4gci5jYWNoZWREYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKF86IHN0cmluZywgaTogbnVtYmVyKSA9PiBpIDwgTnVtYmVyKHN0ci5zcGxpdCgnOicpWzFdKSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignJykpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCRsaW5lczpcXGQrL2csXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG5cclxuICAgICAgICAgc3RyID0+IHIuY2FjaGVkRGF0YVxyXG4gICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcclxuICAgICAgICAgICAgICAgICAuZmlsdGVyKChfOiBzdHJpbmcsIGk6IG51bWJlcikgPT4gaSA8IE51bWJlcihzdHIuc3BsaXQoJzonKVsxXSkpXHJcbiAgICAgICAgICAgICAgICAgLmpvaW4oJ1xcbicpXHJcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmxpbmVFbmRpbmcsICdnJyksICcnKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcJGZyb250bWF0dGVyOlthLXpBLVowLTlfLV0rLywgcyA9PiBnZXRGcm9udE1hdHRlcihzLCByKSlcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwkbGV0dGVycysvZywgci5jYWNoZWREYXRhLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmxpbmVFbmRpbmcsICdnJyksICcnKSlcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwkbGluZXMrL2csIHIuY2FjaGVkRGF0YS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5saW5lRW5kaW5nLCAnZycpLCAnJykpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCRleHQvZywgci5leHRlbnNpb24pXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCRjcmVhdGVkL2csIFN0cmluZyhyLnN0YXQuY3RpbWUpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwkc2l6ZS9nLCBTdHJpbmcoci5zdGF0LnNpemUpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwkcGF0aC9nLCByLnBhdGgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCRwYXJlbnQvZywgci5wYXJlbnQubmFtZSlcclxuXHJcbiAgICAgICAgY29uc3QgY2hhbmdlZCA9IGZpbGVzV2l0aG91dEN1cnJlbnQubWFwKGZpbGUgPT4gcmVwZWF0YWJsZUNvbnRlbnQubWFwKHMgPT4gZm9ybWF0KGZpbGUsIHMpKS5qb2luKCdcXG4nKSlcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaGVhZGluZy5qb2luKCdcXG4nKSArICdcXG4nICsgY2hhbmdlZC5qb2luKCdcXG4nKSArICdcXG4nICsgZm9vdGVyLmpvaW4oJ1xcbicpICsgJ1xcblxcbicgKyB0aGlzLmxpbmVFbmRpbmdcclxuXHJcbiAgICAgICAgY29uc3QgZnN0TGluZSA9IHRoaXMuZ2V0RnN0TGluZU51bSh0aGlzLmNtLCBuKVxyXG4gICAgICAgIGNvbnN0IGxzdExpbmUgPSB0aGlzLmdldExhc3RMaW5lTnVtKHRoaXMuY20sIGZzdExpbmUpXHJcblxyXG4gICAgICAgIHRoaXMuY20ucmVwbGFjZVJhbmdlKHJlc3VsdCxcclxuICAgICAgICAgICAge2xpbmU6IGZzdExpbmUsIGNoOiAwfSxcclxuICAgICAgICAgICAge2xpbmU6IGxzdExpbmUsIGNoOiB0aGlzLmNtLmdldExpbmUobHN0TGluZSkubGVuZ3RofSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNpbXBsZU1vZGUoY21Eb2M6IENvZGVNaXJyb3IuRG9jLCBpc0VtYmVkOiBib29sZWFuLCBjdXJOdW06IG51bWJlciwgY3VyVGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qge3JlZm9ybWF0TGlua3MsIGdldExhc3RMaW5lTnVtLCBzZWFyY2h9ID0gdGhpc1xyXG5cclxuICAgICAgICBjb25zdCBnZXRGb3VuZEZpbGVuYW1lcyA9IChjYWxsYmFjazogKHM6IHN0cmluZykgPT4gYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaExlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKCdzZWFyY2gnKVswXVxyXG4gICAgICAgICAgICBzZWFyY2hMZWFmLm9wZW4oc2VhcmNoTGVhZi52aWV3KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZpZXc6IFZpZXcpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZWZvcm1hdExpbmtzKEFycmF5LmZyb20odmlldy5kb20ucmVzdWx0RG9tTG9va3VwLmtleXMoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5kZWxheSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VMaW5lID0gKGNvbnRlbnQ6IHN0cmluZykgPT4gY21Eb2MucmVwbGFjZVJhbmdlKGVtYmVkRm9ybXVsYSArIGNvbnRlbnQgKyAnXFxuXFxuJyArIHRoaXMubGluZUVuZGluZyxcclxuICAgICAgICAgICAge2xpbmU6IGZzdExpbmVOdW1Ub1JlcGxhY2UsIGNoOiAwfSxcclxuICAgICAgICAgICAge2xpbmU6IGxzdExpbmVOdW1Ub1JlcGxhY2UsIGNoOiBjbURvYy5nZXRMaW5lKGxzdExpbmVOdW1Ub1JlcGxhY2UpLmxlbmd0aH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IGZzdExpbmVOdW1Ub1JlcGxhY2UgPSBpc0VtYmVkXHJcbiAgICAgICAgICAgID8gY3VyTnVtIC0gMVxyXG4gICAgICAgICAgICA6IGN1ck51bVxyXG4gICAgICAgIGNvbnN0IGxzdExpbmVOdW1Ub1JlcGxhY2UgPSBpc0VtYmVkXHJcbiAgICAgICAgICAgID8gZ2V0TGFzdExpbmVOdW0oY21Eb2MpXHJcbiAgICAgICAgICAgIDogY3VyTnVtXHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gY3VyVGV4dC5yZXBsYWNlKCd7eycsICcnKS5yZXBsYWNlKCd9fScsICcnKVxyXG4gICAgICAgIGNvbnN0IGVtYmVkRm9ybXVsYSA9ICdgYGBleHBhbmRlclxcbicgK1xyXG4gICAgICAgICAgICAne3snICsgc2VhcmNoUXVlcnkgKyAnfX1cXG4nICtcclxuICAgICAgICAgICAgJ2BgYFxcbidcclxuXHJcbiAgICAgICAgc2VhcmNoKHNlYXJjaFF1ZXJ5KVxyXG4gICAgICAgIGdldEZvdW5kRmlsZW5hbWVzKHJlcGxhY2VMaW5lKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRFeHBhbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmLnZpZXdcclxuXHJcbiAgICAgICAgaWYgKCEoY3VycmVudFZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY21Eb2MgPSB0aGlzLmNtID0gY3VycmVudFZpZXcuc291cmNlTW9kZS5jbUVkaXRvclxyXG4gICAgICAgIGNvbnN0IGN1ck51bSA9IGNtRG9jLmdldEN1cnNvcigpLmxpbmVcclxuICAgICAgICBjb25zdCBjdXJUZXh0ID0gY21Eb2MuZ2V0TGluZShjdXJOdW0pXHJcbiAgICAgICAgY29uc3Qgd29ya2luZ0xpbmUgPSB0aGlzLmdldENvbnRlbnRCZXR3ZWVuTGluZXMoY3VyTnVtLCAnYGBgZXhwYW5kZXInLCAnYGBgJykgfHwgY3VyVGV4dFxyXG5cclxuICAgICAgICBjb25zdCBoYXNGb3JtdWxhUmVnZXhwID0gL157ey4rfX0vXHJcbiAgICAgICAgY29uc3QgaXNFbWJlZCA9IHdvcmtpbmdMaW5lLnNwbGl0KCdcXG4nKS5sZW5ndGggPiAxIHx8IGNtRG9jLmdldExpbmUoY3VyTnVtIC0gMSkgPT09ICdgYGBleHBhbmRlcidcclxuXHJcbiAgICAgICAgaWYgKCFoYXNGb3JtdWxhUmVnZXhwLnRlc3Qod29ya2luZ0xpbmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRW1iZWQgJiYgdGhpcy5jaGVja1RlbXBsYXRlTW9kZSh3b3JraW5nTGluZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRlbXBsYXRlTW9kZSh3b3JraW5nTGluZSwgY3VyTnVtKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRTaW1wbGVNb2RlKGNtRG9jLCBpc0VtYmVkLCBjdXJOdW0sIGN1clRleHQpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25sb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgICAgICBpZDogJ2VkaXRvci1leHBhbmQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZXhwYW5kJyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuaW5pdEV4cGFuZGVyLFxyXG4gICAgICAgICAgICBob3RrZXlzOiBbXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmxvYWREYXRhKClcclxuICAgICAgICB0aGlzLmRlbGF5ID0gZGF0YT8uZGVsYXkgfHwgMjAwMFxyXG4gICAgICAgIHRoaXMubGluZUVuZGluZyA9IGRhdGEubGluZUVuZGluZyB8fCAnPC0tLT4nXHJcbiAgICB9XHJcblxyXG4gICAgb251bmxvYWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VubG9hZGluZyBwbHVnaW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gICAgcGx1Z2luOiBUZXh0RXhwYW5kZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBUZXh0RXhwYW5kZXIpIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwXHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB7Y29udGFpbmVyRWx9ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywge3RleHQ6ICdTZXR0aW5ncyBmb3IgVGV4dCBFeHBhbmRlcid9KTtcclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdEZWxheScpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKCdUZXh0IGV4cGFuZGVyIGRvblxcJyB3YWl0IHVudGlsIHNlYXJjaCBjb21wbGV0ZWQuIEl0IHdhaXRzIGZvciBhIGRlbGF5IGFuZCBwYXN0ZSByZXN1bHQgYWZ0ZXIgdGhhdC4nKVxyXG4gICAgICAgICAgICAuYWRkU2xpZGVyKHNsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuc2V0TGltaXRzKDEwMDAsIDEwMDAwLCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLnNldFZhbHVlKHRoaXMucGx1Z2luLmRlbGF5KVxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5kZWxheSA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoeyBkZWxheTogdmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuc2V0RHluYW1pY1Rvb2x0aXAoKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoJ0xpbmUgZW5kaW5nJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ1lvdSBjYW4gc3BlY2lmeSB0aGUgdGV4dCB3aGljaCB3aWxsIGFwcGVhciBhdCB0aGUgYm90dG9tIG9mIHRoZSBnZW5lcmF0ZWQgdGV4dC4nKVxyXG4gICAgICAgICAgICAuYWRkVGV4dCh0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHQuc2V0VmFsdWUodGhpcy5wbHVnaW4ubGluZUVuZGluZylcclxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UodmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ubGluZUVuZGluZyA9IHZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh7IGRlbGF5OiB0aGlzLnBsdWdpbi5kZWxheSwgbGluZUVuZGluZzogdmFsIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRmlsZVZpZXciLCJNYXJrZG93blZpZXciLCJQbHVnaW4iLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMs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
