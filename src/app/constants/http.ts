export var SERVER_URL = 'http://billbook-api.com/api';
export var DANGER_TEMPLATE = '<div class="alert alert-warning"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Warning!</strong></div>'

export function alert(message: string, type: string){

    var template = '';

    if(type == 'danger'){
        template += '<div class="alert alert-danger">';
        template += '<strong>Danger!</strong>&nbsp;';
        template += message;            
        template += '</div>';            
    } else if(type == 'success'){
        template += '<div class="alert alert-success">';
        template += '<strong>Success</strong>&nbsp;';
        template += message;            
        template += '</div>';            
    } else if(type == 'warning'){
        template += '<div class="alert alert-warning">';
        template += '<strong>Warning</strong>&nbsp;';
        template += message;            
        template += '</div>';            
    } else if(type == 'info'){
        template += '<div class="alert alert-info">';
        template += '<strong>Info</strong>&nbsp;';
        template += message;            
        template += '</div>';            
    }

    return template;
}