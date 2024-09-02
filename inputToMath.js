document.addEventListener('DOMContentLoaded', function(){
    const inputArea = document.querySelector('.input textarea');
    const outputBox = document.querySelector('.output .box');

    window.mathJax = {
        loader: {load: ['[tex]/cancel']},
        tex: {packages: {'[+]': ['cancel']}}
    };

    inputArea.addEventListener('input', function(){
        const inputText = inputArea.value;
        outputBox.innerHTML = inputText; // a query escolhida é const, mas os atributos da classe são mutáveis.
        
        // Typesetting assíncrono
        MathJax.typesetPromise([outputBox]).catch(function (err) {
            console.error('MathJax processing failed: ', err)
        });
    });
});