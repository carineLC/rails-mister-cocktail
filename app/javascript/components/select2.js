import $ from 'jquery';
import 'select2'


function matchStart(params, data) {
    params.term = params.term || '';
    if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0) {
        return data;
    }
    return false;
}

$('.js-example-basic-single').select2({
    matcher: function(params, data) {
        return matchStart(params, data);
    },
});

// Requiring CSS! Path is relative to ./node_modules
import 'select2/dist/css/select2.css';
