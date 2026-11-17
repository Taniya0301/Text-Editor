(function () {
    'use strict';

    var form = document.getElementById('settings-form');
    var editor = document.getElementById('box');
    var background = document.getElementById('bg');
    var textColour = document.getElementById('txt');
    var fontFamily = document.getElementById('font');

    // The settings controls are the single source of truth: their initial
    // values (set in index.html) are the defaults, so nothing is duplicated here.
    function applySettings() {
        editor.style.backgroundColor = background.value;
        editor.style.color = textColour.value;
        editor.style.fontFamily = fontFamily.value;
    }

    form.addEventListener('input', applySettings);

    // The browser restores each control to its HTML default when the form is
    // reset. Wait one tick so the new values are in place, then re-apply them.
    // The editor text is outside the form, so it is left untouched.
    form.addEventListener('reset', function () {
        setTimeout(applySettings, 0);
    });

    applySettings();
})();
