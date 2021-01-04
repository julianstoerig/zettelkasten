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

var DiscordianPlugin = /** @class */ (function (_super) {
    __extends(DiscordianPlugin, _super);
    function DiscordianPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // refresh function for when we change settings
        _this.refresh = function () {
            // re-load the style
            _this.updateStyle();
        };
        return _this;
    }
    DiscordianPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || {
                            hideVault: true,
                            hideTitleBar: true,
                            hideStatusBar: true,
                            darkEnhance: false,
                            fontSizeNotes: 14,
                            fontSizeFileExplorer: 14,
                            writerMode: false,
                            paragraphFocusMode: false,
                            paragraphFocusFade: 75,
                            flatAndyMode: true,
                            readableLength: 45
                        };
                        this.addSettingTab(new DiscordianPluginSettingsTab(this.app, this));
                        this.addStyle();
                        this.addCommands();
                        this.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscordianPlugin.prototype.onunload = function () {
        this.removeStyle();
    };
    DiscordianPlugin.prototype.addCommands = function () {
        var _this = this;
        this.addCommand({
            id: 'toggle-discordian-writer-mode',
            name: 'Toggle Writer Mode',
            callback: function () {
                _this.settings.writerMode = !_this.settings.writerMode;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-flat-andy-mode',
            name: 'Toggle Flat Andy Mode',
            callback: function () {
                _this.settings.flatAndyMode = !_this.settings.flatAndyMode;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-paragraph-focus-mode',
            name: 'Toggle Paragraph Focus Mode',
            callback: function () {
                _this.settings.paragraphFocusMode = !_this.settings.paragraphFocusMode;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-dark-enhance',
            name: 'Toggle Dark note headers',
            callback: function () {
                _this.settings.darkEnhance = !_this.settings.darkEnhance;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
    };
    // add the styling elements we need
    DiscordianPlugin.prototype.addStyle = function () {
        // add a css block for our settings-dependent styles
        var css = document.createElement('style');
        css.id = 'discordian-theme';
        document.getElementsByTagName("head")[0].appendChild(css);
        // add the main class
        document.body.classList.add('discordian-theme');
        document.body.classList.add('discordian-readable-length');
        document.body.classList.add('discordian-paragraph-focus-fade');
        // update the style with the settings-dependent styles
        this.updateStyle();
    };
    DiscordianPlugin.prototype.removeStyle = function () {
        var discordianClasses = [
            'discordian-theme',
            'discordian-writer-mode',
            'discordian-flat-andy-mode',
            'discordian-paragraph-focus',
            'discordian-paragraph-focus-fade',
            'discordian-readable-length',
            'discordian-font-size-notes',
            'discordian-font-size-file-explorer',
            'discordian-dark-enhance',
            'discordian-hide-vault',
            'discordian-hide-titlebar',
            'discordian-hide-statusbar'
        ];
        document.body.removeClasses(discordianClasses);
    };
    DiscordianPlugin.prototype.initStyles = function () {
        var discordianEl = document.getElementById('discordian-theme');
        if (discordianEl) {
            var len = this.settings.readableLength + 'rem';
            var fade = 100 - this.settings.paragraphFocusFade;
            var fontSizeNotes = this.settings.fontSizeNotes / 16 + 'rem';
            var fontSizeFileExplorer = this.settings.fontSizeFileExplorer / 16 + 'rem';
            var letterSpacingNotes = (this.settings.fontSizeNotes < 16 ? -0.2 : -0.4) + 'px';
            discordianEl.innerText = "\n                    body.discordian-theme {\n                        --readable-line-length:" + len + ";\n                        --paragraph-focus-fade: 0." + fade + ";\n                        --font-size-notes: " + fontSizeNotes + ";\n                        --font-size-file-explorer: " + fontSizeFileExplorer + ";\n                        --letter-spacing-notes: " + letterSpacingNotes + ";\n                    }\n                ";
        }
        else {
            throw "Could not find Discordian Theme";
        }
    };
    // update the styles (at the start, or as the result of a settings change)
    DiscordianPlugin.prototype.updateStyle = function () {
        document.body.classList.toggle('discordian-writer-mode', this.settings.writerMode);
        document.body.classList.toggle('discordian-flat-andy-mode', this.settings.flatAndyMode);
        document.body.classList.toggle('discordian-paragraph-focus', this.settings.paragraphFocusMode);
        document.body.classList.toggle('discordian-hide-vault', this.settings.hideVault);
        document.body.classList.toggle('discordian-hide-titlebar', this.settings.hideTitleBar);
        document.body.classList.toggle('discordian-hide-statusbar', this.settings.hideStatusBar);
        document.body.classList.toggle('discordian-dark-enhance', this.settings.darkEnhance);
        this.initStyles();
    };
    return DiscordianPlugin;
}(obsidian.Plugin));
var DiscordianPluginSettingsTab = /** @class */ (function (_super) {
    __extends(DiscordianPluginSettingsTab, _super);
    function DiscordianPluginSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    DiscordianPluginSettingsTab.prototype.display = function () {
        var containerEl = this.containerEl;
        var settings = this.plugin.settings;
        containerEl.empty();
        this.addPluginDescription(containerEl);
        this.addPluginSettingsHeader(containerEl, 'Theme Settings');
        this.addWriterModeSettings(containerEl, settings);
        this.addFlatAndyModeSettings(containerEl, settings);
        this.addParagraphFocusModeSettings(containerEl, settings);
        this.addReadableLengthSettings(containerEl, settings);
        this.addDarkEnhanceSettings(containerEl, settings);
        this.addPluginSettingsSeparator(containerEl);
        this.addPluginSettingsHeader(containerEl, 'Fonts');
        this.addNotesFontSizeSettings(containerEl, settings);
        this.addFileExplorerFontSizeSettings(containerEl, settings);
        this.addPluginSettingsSeparator(containerEl);
        this.addPluginSettingsHeader(containerEl, 'If not using Hider plugin');
        this.addHideVaultSettings(containerEl, settings);
        this.addHideTitleBarSettings(containerEl, settings);
        this.addHideStatusBarSettings(containerEl, settings);
    };
    DiscordianPluginSettingsTab.prototype.addPluginDescription = function (containerEl) {
        var description = containerEl.createEl('div', { cls: 'plugin-description' });
        description.createEl('h3', { text: 'Thanks for using Discordian !' });
        description.createEl('p', { text: 'If you notice any issues, try to update to the latest version and reload Obsidian.' });
        description.createEl('p', { text: 'Otherwise feel free to bring it up on Github or better yet contribute a fix.' });
        description.createEl('a', {
            text: 'https://github.com/radekkozak/discordian/issues/',
            attr: { 'href': 'https://github.com/radekkozak/discordian/issues/', 'target': '_blank' }
        });
    };
    DiscordianPluginSettingsTab.prototype.addPluginSettingsHeader = function (containerEl, headerTitle) {
        containerEl.createEl('h4', { text: headerTitle });
    };
    DiscordianPluginSettingsTab.prototype.addPluginSettingsSeparator = function (containerEl) {
        containerEl.createEl('p', { text: '⊷', cls: 'plugin-description separator' });
    };
    DiscordianPluginSettingsTab.prototype.addWriterModeSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Writer mode')
            .setDesc('Hides visual excess when sidebars are collapsed (accessible by hover) ')
            .addToggle(function (toggle) { return toggle.setValue(settings.writerMode)
            .onChange(function (value) {
            settings.writerMode = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addFlatAndyModeSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Flat Andy Mode')
            .setDesc('Flatter notes stacking when in Andy Mode (no elevation shadow)')
            .addToggle(function (toggle) { return toggle.setValue(settings.flatAndyMode)
            .onChange(function (value) {
            settings.flatAndyMode = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addParagraphFocusModeSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Paragraph focus mode')
            .setDesc('This aims to imitate well-known iA Writer paragraph focus.')
            .addToggle(function (toggle) { return toggle.setValue(settings.paragraphFocusMode)
            .onChange(function (value) {
            settings.paragraphFocusMode = value;
            _this.plugin.saveData(settings);
            setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', !value);
            _this.plugin.refresh();
        }); });
        var nameFade = 'Paragraph Focus Mode fade ';
        var setting = new obsidian.Setting(containerEl)
            .setName(nameFade + '( = ' + settings.paragraphFocusFade + '% )')
            .setDesc('Amount of fade out when in Paragraph Focus Mode (default 75%)')
            .addSlider(function (slider) { return slider.setLimits(25, 90, 5)
            .setValue(settings.paragraphFocusFade)
            .onChange(function (value) {
            settings.paragraphFocusFade = value;
            setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', !value);
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(nameFade + '( = ' + settings.paragraphFocusFade + '% )');
        }); });
        setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', !settings.paragraphFocusMode);
    };
    DiscordianPluginSettingsTab.prototype.addReadableLengthSettings = function (containerEl, settings) {
        var _this = this;
        var readableLineLength = document.getElementsByClassName('is-readable-line-width');
        var name = 'Readable line length ';
        var setting = new obsidian.Setting(containerEl)
            .setName(name + '( = ' + settings.readableLength + 'rem )')
            .setDesc('Obsidian\'s Readable line length needs to be enabled (default 45 rem)')
            .addSlider(function (slider) { return slider.setLimits(45, 120, 5)
            .setValue(settings.readableLength)
            .onChange(function (value) {
            settings.readableLength = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(name + '( = ' + settings.readableLength + 'rem )');
        }); });
        setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', readableLineLength.length == 0);
    };
    DiscordianPluginSettingsTab.prototype.addDarkEnhanceSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Dark note headers')
            .setDesc('Makes note header more prominent')
            .addToggle(function (toggle) { return toggle.setValue(settings.darkEnhance)
            .onChange(function (value) {
            settings.darkEnhance = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addNotesFontSizeSettings = function (containerEl, settings) {
        var _this = this;
        var name = 'Notes font size ';
        var setting = new obsidian.Setting(containerEl)
            .setName(name + '( = ' + settings.fontSizeNotes + 'px )')
            .setDesc('Used in editor/preview mode (default 14px)')
            .addSlider(function (slider) { return slider.setLimits(14, 22, 2)
            .setValue(settings.fontSizeNotes)
            .onChange(function (value) {
            settings.fontSizeNotes = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(name + '( = ' + value + 'px )');
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addFileExplorerFontSizeSettings = function (containerEl, settings) {
        var _this = this;
        var name = 'File Explorer font size ';
        var setting = new obsidian.Setting(containerEl)
            .setName(name + '( = ' + settings.fontSizeFileExplorer + 'px )')
            .setDesc('Used in File Explorer (default 14px)')
            .addSlider(function (slider) { return slider.setLimits(12, 18, 2)
            .setValue(settings.fontSizeFileExplorer)
            .onChange(function (value) {
            settings.fontSizeFileExplorer = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(name + '( = ' + value + 'px )');
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addHideVaultSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Hide vault name')
            .setDesc('Hides vault name in File Explorer')
            .addToggle(function (toggle) { return toggle.setValue(settings.hideVault)
            .onChange(function (value) {
            settings.hideVault = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addHideTitleBarSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Hide title bar')
            .setDesc('Hides main title bar (theme\'s default)')
            .addToggle(function (toggle) { return toggle.setValue(settings.hideTitleBar)
            .onChange(function (value) {
            settings.hideTitleBar = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addHideStatusBarSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Hide status bar')
            .setDesc('Hides status bar (theme\'s default)')
            .addToggle(function (toggle) { return toggle.setValue(settings.hideStatusBar)
            .onChange(function (value) {
            settings.hideStatusBar = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    return DiscordianPluginSettingsTab;
}(obsidian.PluginSettingTab));

module.exports = DiscordianPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7QXBwLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmd9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY29yZGlhblBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcbiAgICBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzO1xyXG5cclxuICAgIGFzeW5jIG9ubG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKSB8fCB7XHJcbiAgICAgICAgICAgIGhpZGVWYXVsdDogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZVRpdGxlQmFyOiB0cnVlLFxyXG4gICAgICAgICAgICBoaWRlU3RhdHVzQmFyOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXJrRW5oYW5jZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplTm90ZXM6IDE0LFxyXG4gICAgICAgICAgICBmb250U2l6ZUZpbGVFeHBsb3JlcjogMTQsXHJcbiAgICAgICAgICAgIHdyaXRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJhZ3JhcGhGb2N1c01vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJhZ3JhcGhGb2N1c0ZhZGU6IDc1LFxyXG4gICAgICAgICAgICBmbGF0QW5keU1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlYWRhYmxlTGVuZ3RoOiA0NVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgRGlzY29yZGlhblBsdWdpblNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkU3R5bGUoKVxyXG5cclxuICAgICAgICB0aGlzLmFkZENvbW1hbmRzKClcclxuXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKClcclxuICAgIH1cclxuXHJcbiAgICBvbnVubG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVN0eWxlKClcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb21tYW5kcygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICAgICAgaWQ6ICd0b2dnbGUtZGlzY29yZGlhbi13cml0ZXItbW9kZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgV3JpdGVyIE1vZGUnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy53cml0ZXJNb2RlID0gIXRoaXMuc2V0dGluZ3Mud3JpdGVyTW9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgICAgICBpZDogJ3RvZ2dsZS1mbGF0LWFuZHktbW9kZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgRmxhdCBBbmR5IE1vZGUnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5mbGF0QW5keU1vZGUgPSAhdGhpcy5zZXR0aW5ncy5mbGF0QW5keU1vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICAgICAgaWQ6ICd0b2dnbGUtcGFyYWdyYXBoLWZvY3VzLW1vZGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9nZ2xlIFBhcmFncmFwaCBGb2N1cyBNb2RlJyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFyYWdyYXBoRm9jdXNNb2RlID0gIXRoaXMuc2V0dGluZ3MucGFyYWdyYXBoRm9jdXNNb2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiAndG9nZ2xlLWRhcmstZW5oYW5jZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgRGFyayBub3RlIGhlYWRlcnMnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXJrRW5oYW5jZSA9ICF0aGlzLnNldHRpbmdzLmRhcmtFbmhhbmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIHRoZSBzdHlsaW5nIGVsZW1lbnRzIHdlIG5lZWRcclxuICAgIGFkZFN0eWxlKCkge1xyXG4gICAgICAgIC8vIGFkZCBhIGNzcyBibG9jayBmb3Igb3VyIHNldHRpbmdzLWRlcGVuZGVudCBzdHlsZXNcclxuICAgICAgICBjb25zdCBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIGNzcy5pZCA9ICdkaXNjb3JkaWFuLXRoZW1lJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSBtYWluIGNsYXNzXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXNjb3JkaWFuLXRoZW1lJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXNjb3JkaWFuLXJlYWRhYmxlLWxlbmd0aCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzY29yZGlhbi1wYXJhZ3JhcGgtZm9jdXMtZmFkZScpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIHdpdGggdGhlIHNldHRpbmdzLWRlcGVuZGVudCBzdHlsZXNcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgZGlzY29yZGlhbkNsYXNzZXMgPSBbXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLXRoZW1lJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4td3JpdGVyLW1vZGUnLFxyXG4gICAgICAgICAgICAnZGlzY29yZGlhbi1mbGF0LWFuZHktbW9kZScsXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLXBhcmFncmFwaC1mb2N1cycsXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLXBhcmFncmFwaC1mb2N1cy1mYWRlJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tcmVhZGFibGUtbGVuZ3RoJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tZm9udC1zaXplLW5vdGVzJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tZm9udC1zaXplLWZpbGUtZXhwbG9yZXInLFxyXG4gICAgICAgICAgICAnZGlzY29yZGlhbi1kYXJrLWVuaGFuY2UnLFxyXG4gICAgICAgICAgICAnZGlzY29yZGlhbi1oaWRlLXZhdWx0JyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4taGlkZS10aXRsZWJhcicsXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLWhpZGUtc3RhdHVzYmFyJ1xyXG4gICAgICAgIF1cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNsYXNzZXMoZGlzY29yZGlhbkNsYXNzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTdHlsZXMoKSB7XHJcbiAgICAgICAgY29uc3QgZGlzY29yZGlhbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvcmRpYW4tdGhlbWUnKVxyXG4gICAgICAgIGlmIChkaXNjb3JkaWFuRWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5zZXR0aW5ncy5yZWFkYWJsZUxlbmd0aCArICdyZW0nXHJcbiAgICAgICAgICAgIGNvbnN0IGZhZGUgPSAxMDAgLSB0aGlzLnNldHRpbmdzLnBhcmFncmFwaEZvY3VzRmFkZVxyXG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZU5vdGVzID0gdGhpcy5zZXR0aW5ncy5mb250U2l6ZU5vdGVzIC8gMTYgKyAncmVtJ1xyXG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZUZpbGVFeHBsb3JlciA9IHRoaXMuc2V0dGluZ3MuZm9udFNpemVGaWxlRXhwbG9yZXIgLyAxNiArICdyZW0nXHJcbiAgICAgICAgICAgIGNvbnN0IGxldHRlclNwYWNpbmdOb3RlcyA9ICh0aGlzLnNldHRpbmdzLmZvbnRTaXplTm90ZXMgPCAxNiA/IC0wLjIgOiAtMC40KSArICdweCdcclxuXHJcbiAgICAgICAgICAgIGRpc2NvcmRpYW5FbC5pbm5lclRleHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5kaXNjb3JkaWFuLXRoZW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1yZWFkYWJsZS1saW5lLWxlbmd0aDoke2xlbn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFyYWdyYXBoLWZvY3VzLWZhZGU6IDAuJHtmYWRlfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1mb250LXNpemUtbm90ZXM6ICR7Zm9udFNpemVOb3Rlc307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tZm9udC1zaXplLWZpbGUtZXhwbG9yZXI6ICR7Zm9udFNpemVGaWxlRXhwbG9yZXJ9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWxldHRlci1zcGFjaW5nLW5vdGVzOiAke2xldHRlclNwYWNpbmdOb3Rlc307XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkNvdWxkIG5vdCBmaW5kIERpc2NvcmRpYW4gVGhlbWVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSBzdHlsZXMgKGF0IHRoZSBzdGFydCwgb3IgYXMgdGhlIHJlc3VsdCBvZiBhIHNldHRpbmdzIGNoYW5nZSlcclxuICAgIHVwZGF0ZVN0eWxlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi13cml0ZXItbW9kZScsIHRoaXMuc2V0dGluZ3Mud3JpdGVyTW9kZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNjb3JkaWFuLWZsYXQtYW5keS1tb2RlJywgdGhpcy5zZXR0aW5ncy5mbGF0QW5keU1vZGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1wYXJhZ3JhcGgtZm9jdXMnLCB0aGlzLnNldHRpbmdzLnBhcmFncmFwaEZvY3VzTW9kZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNjb3JkaWFuLWhpZGUtdmF1bHQnLCB0aGlzLnNldHRpbmdzLmhpZGVWYXVsdCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNjb3JkaWFuLWhpZGUtdGl0bGViYXInLCB0aGlzLnNldHRpbmdzLmhpZGVUaXRsZUJhcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNjb3JkaWFuLWhpZGUtc3RhdHVzYmFyJywgdGhpcy5zZXR0aW5ncy5oaWRlU3RhdHVzQmFyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2NvcmRpYW4tZGFyay1lbmhhbmNlJywgdGhpcy5zZXR0aW5ncy5kYXJrRW5oYW5jZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpXHJcbiAgICB9XHJcblxyXG4vLyByZWZyZXNoIGZ1bmN0aW9uIGZvciB3aGVuIHdlIGNoYW5nZSBzZXR0aW5nc1xyXG4gICAgcmVmcmVzaCA9ICgpID0+IHtcclxuICAgICAgICAvLyByZS1sb2FkIHRoZSBzdHlsZVxyXG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRGlzY29yZGlhblBsdWdpblNldHRpbmdzIHtcclxuICAgIGhpZGVWYXVsdDogYm9vbGVhblxyXG4gICAgaGlkZU1ldGFkYXRhOiBib29sZWFuXHJcbiAgICBoaWRlVGl0bGVCYXI6IGJvb2xlYW5cclxuICAgIGhpZGVTdGF0dXNCYXI6IGJvb2xlYW5cclxuICAgIGRhcmtFbmhhbmNlOiBib29sZWFuXHJcbiAgICBmb250U2l6ZU5vdGVzOiBudW1iZXJcclxuICAgIGZvbnRTaXplRmlsZUV4cGxvcmVyOiBudW1iZXJcclxuICAgIGxldHRlclNwYWNpbmdOb3RlczogbnVtYmVyXHJcbiAgICB3cml0ZXJNb2RlOiBib29sZWFuXHJcbiAgICBwYXJhZ3JhcGhGb2N1c01vZGU6IGJvb2xlYW5cclxuICAgIHBhcmFncmFwaEZvY3VzRmFkZTogbnVtYmVyXHJcbiAgICBmbGF0QW5keU1vZGU6IGJvb2xlYW5cclxuICAgIHJlYWRhYmxlTGVuZ3RoOiBudW1iZXJcclxufVxyXG5cclxuY2xhc3MgRGlzY29yZGlhblBsdWdpblNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgICBwbHVnaW46IERpc2NvcmRpYW5QbHVnaW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogRGlzY29yZGlhblBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHtjb250YWluZXJFbH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUGx1Z2luRGVzY3JpcHRpb24oY29udGFpbmVyRWwpXHJcblxyXG4gICAgICAgIHRoaXMuYWRkUGx1Z2luU2V0dGluZ3NIZWFkZXIoY29udGFpbmVyRWwsICdUaGVtZSBTZXR0aW5ncycpXHJcbiAgICAgICAgdGhpcy5hZGRXcml0ZXJNb2RlU2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkRmxhdEFuZHlNb2RlU2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkUGFyYWdyYXBoRm9jdXNNb2RlU2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkUmVhZGFibGVMZW5ndGhTZXR0aW5ncyhjb250YWluZXJFbCwgc2V0dGluZ3MpXHJcbiAgICAgICAgdGhpcy5hZGREYXJrRW5oYW5jZVNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc1NlcGFyYXRvcihjb250YWluZXJFbClcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc0hlYWRlcihjb250YWluZXJFbCwgJ0ZvbnRzJylcclxuICAgICAgICB0aGlzLmFkZE5vdGVzRm9udFNpemVTZXR0aW5ncyhjb250YWluZXJFbCwgc2V0dGluZ3MpXHJcbiAgICAgICAgdGhpcy5hZGRGaWxlRXhwbG9yZXJGb250U2l6ZVNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc1NlcGFyYXRvcihjb250YWluZXJFbClcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc0hlYWRlcihjb250YWluZXJFbCwgJ0lmIG5vdCB1c2luZyBIaWRlciBwbHVnaW4nKVxyXG4gICAgICAgIHRoaXMuYWRkSGlkZVZhdWx0U2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkSGlkZVRpdGxlQmFyU2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkSGlkZVN0YXR1c0JhclNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuICAgIH1cclxuXHJcbiAgICBhZGRQbHVnaW5EZXNjcmlwdGlvbihjb250YWluZXJFbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdkaXYnLCB7Y2xzOiAncGx1Z2luLWRlc2NyaXB0aW9uJ30pO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5jcmVhdGVFbCgnaDMnLCB7dGV4dDogJ1RoYW5rcyBmb3IgdXNpbmcgRGlzY29yZGlhbiAhJ30pO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmNyZWF0ZUVsKCdwJywge3RleHQ6ICdJZiB5b3Ugbm90aWNlIGFueSBpc3N1ZXMsIHRyeSB0byB1cGRhdGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIGFuZCByZWxvYWQgT2JzaWRpYW4uJ30pO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmNyZWF0ZUVsKCdwJywge3RleHQ6ICdPdGhlcndpc2UgZmVlbCBmcmVlIHRvIGJyaW5nIGl0IHVwIG9uIEdpdGh1YiBvciBiZXR0ZXIgeWV0IGNvbnRyaWJ1dGUgYSBmaXguJ30pO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmNyZWF0ZUVsKCdhJywge1xyXG4gICAgICAgICAgICB0ZXh0OiAnaHR0cHM6Ly9naXRodWIuY29tL3JhZGVra296YWsvZGlzY29yZGlhbi9pc3N1ZXMvJyxcclxuICAgICAgICAgICAgYXR0cjogeydocmVmJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYWRla2tvemFrL2Rpc2NvcmRpYW4vaXNzdWVzLycsICd0YXJnZXQnOiAnX2JsYW5rJ31cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQbHVnaW5TZXR0aW5nc0hlYWRlcihjb250YWluZXJFbDogSFRNTEVsZW1lbnQsIGhlYWRlclRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDQnLCB7dGV4dDogaGVhZGVyVGl0bGV9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQbHVnaW5TZXR0aW5nc1NlcGFyYXRvcihjb250YWluZXJFbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHt0ZXh0OiAn4oq3JywgY2xzOiAncGx1Z2luLWRlc2NyaXB0aW9uIHNlcGFyYXRvcid9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRXcml0ZXJNb2RlU2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdXcml0ZXIgbW9kZScpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKCdIaWRlcyB2aXN1YWwgZXhjZXNzIHdoZW4gc2lkZWJhcnMgYXJlIGNvbGxhcHNlZCAoYWNjZXNzaWJsZSBieSBob3ZlcikgJylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLndyaXRlck1vZGUpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mud3JpdGVyTW9kZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZsYXRBbmR5TW9kZVNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnRmxhdCBBbmR5IE1vZGUnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnRmxhdHRlciBub3RlcyBzdGFja2luZyB3aGVuIGluIEFuZHkgTW9kZSAobm8gZWxldmF0aW9uIHNoYWRvdyknKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUoc2V0dGluZ3MuZmxhdEFuZHlNb2RlKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmZsYXRBbmR5TW9kZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBhcmFncmFwaEZvY3VzTW9kZVNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnUGFyYWdyYXBoIGZvY3VzIG1vZGUnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnVGhpcyBhaW1zIHRvIGltaXRhdGUgd2VsbC1rbm93biBpQSBXcml0ZXIgcGFyYWdyYXBoIGZvY3VzLicpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c01vZGUpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MucGFyYWdyYXBoRm9jdXNNb2RlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0dGluZ0VsLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2NvcmRpYW4tcGx1Z2luLXNldHRpbmctZGlzYWJsZWQnLCAhdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUZhZGUgPSAnUGFyYWdyYXBoIEZvY3VzIE1vZGUgZmFkZSAnXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lRmFkZSArICcoID0gJyArIHNldHRpbmdzLnBhcmFncmFwaEZvY3VzRmFkZSArICclICknKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnQW1vdW50IG9mIGZhZGUgb3V0IHdoZW4gaW4gUGFyYWdyYXBoIEZvY3VzIE1vZGUgKGRlZmF1bHQgNzUlKScpXHJcbiAgICAgICAgICAgIC5hZGRTbGlkZXIoc2xpZGVyID0+IHNsaWRlci5zZXRMaW1pdHMoMjUsIDkwLCA1KVxyXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHNldHRpbmdzLnBhcmFncmFwaEZvY3VzRmFkZSlcclxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c0ZhZGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnNldHRpbmdFbC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNjb3JkaWFuLXBsdWdpbi1zZXR0aW5nLWRpc2FibGVkJywgIXZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0TmFtZShuYW1lRmFkZSArICcoID0gJyArIHNldHRpbmdzLnBhcmFncmFwaEZvY3VzRmFkZSArICclICknKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0dGluZy5zZXR0aW5nRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1wbHVnaW4tc2V0dGluZy1kaXNhYmxlZCcsICFzZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c01vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlYWRhYmxlTGVuZ3RoU2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZGFibGVMaW5lTGVuZ3RoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXMtcmVhZGFibGUtbGluZS13aWR0aCcpXHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAnUmVhZGFibGUgbGluZSBsZW5ndGggJ1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSArICcoID0gJyArIHNldHRpbmdzLnJlYWRhYmxlTGVuZ3RoICsgJ3JlbSApJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ09ic2lkaWFuXFwncyBSZWFkYWJsZSBsaW5lIGxlbmd0aCBuZWVkcyB0byBiZSBlbmFibGVkIChkZWZhdWx0IDQ1IHJlbSknKVxyXG4gICAgICAgICAgICAuYWRkU2xpZGVyKHNsaWRlciA9PiBzbGlkZXIuc2V0TGltaXRzKDQ1LCAxMjAsIDUpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoc2V0dGluZ3MucmVhZGFibGVMZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MucmVhZGFibGVMZW5ndGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0TmFtZShuYW1lICsgJyggPSAnICsgc2V0dGluZ3MucmVhZGFibGVMZW5ndGggKyAncmVtICknKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0dGluZy5zZXR0aW5nRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1wbHVnaW4tc2V0dGluZy1kaXNhYmxlZCcsIHJlYWRhYmxlTGluZUxlbmd0aC5sZW5ndGggPT0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGFya0VuaGFuY2VTZXR0aW5ncyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBEaXNjb3JkaWFuUGx1Z2luU2V0dGluZ3MpIHtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoJ0Rhcmsgbm90ZSBoZWFkZXJzJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ01ha2VzIG5vdGUgaGVhZGVyIG1vcmUgcHJvbWluZW50JylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLmRhcmtFbmhhbmNlKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmRhcmtFbmhhbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTm90ZXNGb250U2l6ZVNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAnTm90ZXMgZm9udCBzaXplICdcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUgKyAnKCA9ICcgKyBzZXR0aW5ncy5mb250U2l6ZU5vdGVzICsgJ3B4ICknKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnVXNlZCBpbiBlZGl0b3IvcHJldmlldyBtb2RlIChkZWZhdWx0IDE0cHgpJylcclxuICAgICAgICAgICAgLmFkZFNsaWRlcihzbGlkZXIgPT4gc2xpZGVyLnNldExpbWl0cygxNCwgMjIsIDIpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoc2V0dGluZ3MuZm9udFNpemVOb3RlcylcclxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5mb250U2l6ZU5vdGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnNldE5hbWUobmFtZSArICcoID0gJyArIHZhbHVlICsgJ3B4ICknKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWxlRXhwbG9yZXJGb250U2l6ZVNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAnRmlsZSBFeHBsb3JlciBmb250IHNpemUgJ1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSArICcoID0gJyArIHNldHRpbmdzLmZvbnRTaXplRmlsZUV4cGxvcmVyICsgJ3B4ICknKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnVXNlZCBpbiBGaWxlIEV4cGxvcmVyIChkZWZhdWx0IDE0cHgpJylcclxuICAgICAgICAgICAgLmFkZFNsaWRlcihzbGlkZXIgPT4gc2xpZGVyLnNldExpbWl0cygxMiwgMTgsIDIpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoc2V0dGluZ3MuZm9udFNpemVGaWxlRXhwbG9yZXIpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZm9udFNpemVGaWxlRXhwbG9yZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0TmFtZShuYW1lICsgJyggPSAnICsgdmFsdWUgKyAncHggKScpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEhpZGVWYXVsdFNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnSGlkZSB2YXVsdCBuYW1lJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ0hpZGVzIHZhdWx0IG5hbWUgaW4gRmlsZSBFeHBsb3JlcicpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy5oaWRlVmF1bHQpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuaGlkZVZhdWx0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGlkZVRpdGxlQmFyU2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdIaWRlIHRpdGxlIGJhcicpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKCdIaWRlcyBtYWluIHRpdGxlIGJhciAodGhlbWVcXCdzIGRlZmF1bHQpJylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLmhpZGVUaXRsZUJhcilcclxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5oaWRlVGl0bGVCYXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRIaWRlU3RhdHVzQmFyU2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdIaWRlIHN0YXR1cyBiYXInKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnSGlkZXMgc3RhdHVzIGJhciAodGhlbWVcXCdzIGRlZmF1bHQpJylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLmhpZGVTdGF0dXNCYXIpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuaGlkZVN0YXR1c0JhciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQbHVnaW4iLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFD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
