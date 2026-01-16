export default function StickySocialBar(){
    return(
       <div className="fixed top-[50%] flex flex-col items-center gap-2 transition-colors bg-white text-2xl">
            <Link href="#" class="facebook"><i class="fa fa-facebook"></i></Link> 
            <Link href="#" class="tik_tok"><i class="fa fa-twitter"></i></Link> 
            <Link href="#" class="instagram"><i class="fa fa-google"></i></Link> 
        </div>
    )
}