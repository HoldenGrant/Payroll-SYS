$(function(){
    
    var get_daily_rate = $('input[data-drt="d-rt"]');
    var get_hourly_rate = $('input[data-hrt="h-rt"]');
    var get_ttl_reg_hours = $('input[data-hour="working-total-hours"]');


    function daily_to_hourly(){
        $('.emp-py-rl').each(function() {
            var d_rt = $(this).find(get_daily_rate).val();
            var h_rt = d_rt / '8';
            $(this).find(get_hourly_rate).val(h_rt.toFixed(2));
            console.log(h_rt);

            // compute regular OT pay / hr 25%
            var reg_ot_pay = 0;
            var reg_ot_pay = h_rt * '0.25' + h_rt;
            $('input[data-pay="reg-pay-ot"]').val(reg_ot_pay.toFixed(2))
            //alert(ttl_reg_ot_pay);

            // compute regular pay
            var ttl_reg_pay = 0;
            var ttl_reg_pay = h_rt * get_ttl_reg_hours.val();
            console.log(ttl_reg_pay);
            //alert(ttl_reg_pay);
            $('input[data-pay="reg-pay"]').val(ttl_reg_pay.toFixed(2));
            return false;

            
        });
        //return true;
    }
    daily_to_hourly();
    //alert(get_hourly_rate);


    function working_hours(){
        var sum_ttl_hrs = 0;
        $('input[data-working-hours="work-hrs"]').each(function(){
            var wrk_hrs = $(this).val();
            sum_ttl_hrs += +wrk_hrs;  
        }); 
        $('input[data-working-hours="total-work-hrs"]').val(sum_ttl_hrs);
        //alert(sum_ttl_hrs);     
    }
    working_hours();

    function employee_allowance(){
        var sum_ttl_allwnc = 0;
        $('input[data-allowance="emp-allownace"]').each(function(){
            var allwnc_emp = $(this).val();
            sum_ttl_allwnc += +allwnc_emp;
        });
        $('input[data-allowance="total-emp-allownace"]').val(sum_ttl_allwnc);
    }
    employee_allowance();

    // function regular_pay(){
    //     var reg_pay = 0;
    //     var ret_val = daily_to_hourly();
    //     ttl_reg_pay = ret_val * get_ttl_reg_hours;
    //     $('input[data-pay="reg-pay"]').val(ttl_reg_pay);

    //     //alert(ret_val);
    // }
    //regular_pay();

    // console.log(daily_to_hourly);
    // daily_to_hourly(regular_pay);
    //alert(daily_to_hourly);
    
    


    
});