function showAnti(){
    let opcionShow = $("#realizar").val();
    
    if(opcionShow == 2){
        $(".cls-realizar").addClass('d-block');
        $(".cls-realizar").removeClass('d-none');

        $(".cls-realizar-inv").addClass('d-none');
        $(".cls-realizar-inv").removeClass('d-block');
    }else{
        $(".cls-realizar").removeClass('d-block');
        $(".cls-realizar").addClass('d-none');

        $(".cls-realizar-inv").removeClass('d-none');
        $(".cls-realizar-inv").addClass('d-block');
    }
}

function saldoContacto(id){

    if (window.location.pathname.split("/")[1] === "software") {
        var url='/software/empresa';
        }else{
        var url = '/empresa';
    }

    //public function saldoContacto de ingresoscontroller
    var url= url+'/contactos/'+id+'/json';

    $.ajax({
        url: url,
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },  
        method: 'get',
        success: function(data) {
            data = JSON.parse(data);
            $('#total_saldo').val(data.saldo_favor);
            $("#saldofavorcliente").val(data.saldo_favor);
            let opcion = data.contrato;
            if(opcion == 0){
              $("#form-ingresos-electronica").addClass('d-none');
            }else{
                $("#form-ingresos-electronica").removeClass('d-none');
            }
        }
    })
}