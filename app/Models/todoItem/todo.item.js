System.register([], function(exports_1) {
    var todoItem;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by bcui on 2/1/16.
             */
            todoItem = (function () {
                function todoItem(key, name, status) {
                    if (status === void 0) { status = 'started'; }
                    this.key = key;
                    this.name = name;
                    this.status = status;
                }
                todoItem.prototype.toggleStatus = function () {
                    this.status = (this.status == "completed") ? "started" : "completed";
                };
                return todoItem;
            })();
            exports_1("todoItem", todoItem);
        }
    }
});
//# sourceMappingURL=todo.item.js.map