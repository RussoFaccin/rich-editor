let btnBold = document.querySelector('.a-boldText');
let btnItalic = document.querySelector('.a-italicText');
let btnAlignLeft = document.querySelector('.a-alignLeft');
let btnAlignCenter = document.querySelector('.a-alignCenter');
let btnAlignRight = document.querySelector('.a-alignRight');

document.execCommand("defaultParagraphSeparator", false, "p");

/*
| ===========================================================================
| COMMAND - BOLD
| ===========================================================================
*/

btnBold.addEventListener('click', evt => {
  evt.preventDefault();
  document.execCommand('bold');
});

/*
| ===========================================================================
| COMMAND - Italic
| ===========================================================================
*/

btnItalic.addEventListener('click', evt => {
  evt.preventDefault();
  document.execCommand('italic');
});

/*
| ===========================================================================
| COMMAND - Align Left
| ===========================================================================
*/

btnAlignLeft.addEventListener('click', evt => {
  evt.preventDefault();
  document.execCommand('justifyLeft');

});

/*
| ===========================================================================
| COMMAND - Align Center
| ===========================================================================
*/

btnAlignCenter.addEventListener('click', evt => {
  evt.preventDefault();
  document.execCommand('justifyCenter');
});

/*
| ===========================================================================
| COMMAND - Align Right
| ===========================================================================
*/

btnAlignRight.addEventListener('click', evt => {
  evt.preventDefault();
  document.execCommand('justifyRight');
});