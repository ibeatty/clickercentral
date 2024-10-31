function jekyllStarterTables() {
    'use strict';

    var supported = navigator.userAgent.indexOf('Opera Mini') === -1 &&
            document.querySelectorAll &&
            !!Array.prototype.forEach;

    if (!supported) {
        return;
    }

    var tables = document.querySelectorAll('table');

    tables.forEach(function (table) {
        // make the wrapper and add a class
        var tableWrapper = document.createElement('div');
        tableWrapper.classList.add('table-wrapper');

        // add the wrapper to the DOM
        table.parentNode.insertBefore(tableWrapper, table);

        // move the table inside the wrapper
        tableWrapper.appendChild(table);

        // Make wide tables scrollable
        tableWrapper.style.overflowX = 'scroll';
    });
}

jekyllStarterTables();
