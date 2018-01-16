define(["sap/watt/common/plugin/platform/service/ui/AbstractPart"], function(AbstractPart) {
	"use strict";
	var Pane = AbstractPart.extend("trello_app.service.toggleMyRightSidePane", {
		_oPainView: null,
		getContent: function() {
			if (this._oPainView === null) {
				this._oPainView = sap.ui.view({
					viewName: "trello_app.view.boards",
					type: sap.ui.core.mvc.ViewType.XML,
					viewData: {
						context: this.context
					}
				});
			}
			return this._oPainView;
		}
	});
	return Pane;
});