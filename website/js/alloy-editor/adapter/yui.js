CKEDITOR.disableAutoInline=!0,YUI.add("alloy-editor",function(e){"use strict";var t,o=e.Lang,i=27,n=121,a=9;t=e.Base.create("alloyEditor",e.Base,[],{initializer:function(t){var o,i,n,a,r,s,l;r=this.get("srcNode"),i=CKEDITOR.inline(r.getDOMNode()),i.config.allowedContent=this.get("allowedContent"),i.config.toolbars=this.get("toolbars"),i.config.removePlugins=this.get("removePlugins"),i.config.extraPlugins=this.get("extraPlugins"),i.config.placeholderClass=this.get("placeholderClass"),i.config.pasteFromWordRemoveStyles=!1,i.config.pasteFromWordRemoveFontStyles=!1,e.mix(i.config,t),this._editor=i,a=this.get("eventsDelay"),s=CKEDITOR.tools.debounce(this._onDocInteract,a,this),l=CKEDITOR.tools.debounce(this._onEditorKey,a,this),n=e.one(e.config.doc).on(["click","keydown"],s),o=r.on("keydown",l),this._eventHandles=[s,l,n,o],i.on("toolbarKey",this._onToolbarKey,this),i.on("toolbarActive",this._onToolbarActive,this)},destructor:function(){var t;t=CKEDITOR.instances[this.get("srcNode").get("id")],t&&(e.Object.each(t.config.toolbars,function(e){e.destroy()}),t.destroy()),new e.EventHandle(this._eventHandles).detach()},_focusNextToolbar:function(){var t,o,i,n;t=this._activeToolbar,n=this._editor.config.toolbars,n=e.Object.keys(n).map(function(e){return n[e]}),o=e.Array.indexOf(n,t),i=n.splice(o),n=i.concat(n),e.Array.some(n,function(e){return e!==t&&e.focus()?(this._activeToolbar=e,!0):void 0},this)},_focusVisibleToolbar:function(){e.Object.some(this._editor.config.toolbars,function(e){return e!=this._activeToolbar&&e.focus()?(this._activeToolbar=e,e.get("visible")):void 0},this)},_getNativeEditor:function(){return this._editor},_hideToolbars:function(){e.Object.each(this._editor.config.toolbars,function(e){e.hide()})},_onDocInteract:function(t){var o,i,n;n=this.get("srcNode"),i=n===t.target||n.contains(t.target),o=CKEDITOR.instances[n.get("id")],i=i||e.some(o.config.toolbars,function(e){return e.ownsNode(t.target)}),i||this._editor.fire("toolbarsHide")},_onEditorKey:function(e){e.altKey&&e.keyCode===n?this._focusVisibleToolbar():e.keyCode===i&&this._hideToolbars()},_onToolbarActive:function(e){this._activeToolbar=e.data},_onToolbarKey:function(e){e.data.keyCode===a?(e.data.preventDefault(),this._focusNextToolbar()):e.data.keyCode===i&&(this._activeToolbar.blur(),this._activeToolbar=null,this._hideToolbars())},_validateAllowedContent:function(e){return o.isString(e)||o.isObject(e)||o.isBoolean(e)},_validateToolbars:function(e){return""===e||o.isObject(e)||o.isNull(e)}},{ATTRS:{allowedContent:{validator:"_validateAllowedContent",value:!0,writeOnce:!0},eventsDelay:{validator:o.isNumber,value:100},extraPlugins:{validator:o.isString,value:"uicore,selectionregion,dropimages,placeholder,linktooltip,uiloader",writeOnce:!0},nativeEditor:{getter:"_getNativeEditor",readOnly:!0},placeholderClass:{validator:o.isString,value:"alloy-editor-placeholder",writeOnce:!0},removePlugins:{validator:o.isString,value:"contextmenu,toolbar,elementspath,resize,liststyle,tabletools,link",writeOnce:!0},srcNode:{setter:e.one,writeOnce:!0},toolbars:{validator:"_validateToolbars",value:{add:["image"],image:["left","right"],styles:["strong","em","u","h1","h2","a","twitter"]}}}}),e.AlloyEditor=t},"",{requires:["base-build","node-base"]});