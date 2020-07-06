class Format
{
    static getCamelCase(text)
    // Esse metodo cria automaticamente os atributos para cada uma das id dentro do HTML ja padronisados em CamelCase
    {

        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }
}