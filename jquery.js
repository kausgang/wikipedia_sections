<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>

<script>
$(function(){
        $("h3").nextUntil("h3").hide();
        $("h3").click(function(){

            $(this).nextUntil("h3").slideToggle();

        });

})
</script>
