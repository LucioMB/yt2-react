import React from 'react';
import './article-bar.css';
import './index.css';
import {Iscrizione1, Iscrizione2, Iscrizione3, Iscrizione4, Iscrizione5, Iscrizione6, Iscrizione7, Iscrizione8} from './images/indexArticleBar.js';


function ArticleBar() {
    return(
<div id="main-article">
    <article>
        <p class="p-title-art">
            <h4 class="title-art">Consigliati</h4>
        </p>
            <div class="video-col">
                <div class="item1">
                    <video controls>
                        <source src="https://asmassets.mtvnservices.com/asm/mtv_international/italy/2019/IT_Binda_BreilEden_video_15s_dec19.mp4" />             
                    </video></div>
                <div class="item2">
                    <video controls>
                        <source src="https://youtu.be/9TNqvlkwqlQ" />
                    </video>
                </div>
                <div class="item3">
                    <video controls>
                        <source src="https://youtu.be/3yr21tW7Iho" />
                    </video>
                </div>
                <div class="item4">
                    <video controls>
                        <source src="https://youtu.be/Uf5iRY3xH40" />
                    </video>
                </div>
            </div>
<br />
<br />
            <div class="video-col-tx">
                <div class="item5">
                    <img src={Iscrizione1} alt="Iscrizione1" />
                </div> 
                <div class="item6"> Il mistero della strana pioggia
                    <br /><br />
                    <div class="description"> L'Inspiegabile
                    <br />
                    76.676 visualizzazioni
                    <br />
                    2 settimane fa
                    </div>
                </div>

                <div class="item7">
                    <img src={Iscrizione2} />
                </div>
                <div class="item8"> 10 gadget imperdibili di Amazon
                    <br /><br />
                    <div class="description"> beCurious
                    <br />
                    56.603 visualizzazioni
                    <br />
                    3 settimane fa
                    </div>
                </div>

                <div class="item9">
                    <img src={Iscrizione3} />
                </div>
                <div class="item10"> Le grandi scoperte di...
                    <br /><br />
                    <div class="description"> Infinito
                    <br />
                    37.651 visualizzazioni
                    <br />
                    1 mese fa
                    </div>
                </div>

                <div class="item11">
                    <img src={Iscrizione4} />
                </div>
                <div class="item12"> 20 curiosit&agrave; dal Giappone
                    <br /><br />
                    <div class="description"> IL LATO POSITIVO
                    <br />
                    5.479 visualizzazioni
                    <br />
                    6 giorni fa
                    </div>
                </div>
            </div>
<p></p>
<br />
            <div class="video-col">
                <div class="item1">
                    <video controls>
                    <source src="https://youtu.be/1P1QUn87tWw" />             
                    </video>
                </div>
                <div class="item2">
                    <video controls>
                    <source src="https://youtu.be/9TNqvlkwqlQ" />
                    </video>
                </div>
                <div class="item3">
                    <video controls>
                    <source src="https://youtu.be/3yr21tW7Iho" />
                    </video>
                </div>
                <div class="item4">
                    <video controls>
                    <source src="https://youtu.be/Uf5iRY3xH40" />
                    </video>
                </div>
            </div>
<br />
<br />
            <div class="video-col-tx">
                <div class="item5">
                    <img src={Iscrizione5} />
                </div> 
                <div class="item6"> 10 alimenti con pi&ugrave; vitamina C
                    <br /><br />
                    <div class="description"> Alimenti (Roberto Andrioli)
                    <br />
                    10.003 visualizzazioni
                    <br />
                    10 mesi fa
                </div>
            </div>

                <div class="item7">
                    <img src={Iscrizione6} />
                </div>
                <div class="item8"> Difesa da pugno basso
                    <br /><br />
                    <div class="description"> Krav Maga
                    <br />
                    7.243 visualizzazioni
                    <br />
                    2 anni fa
                    </div>
                </div>

                <div class="item9">
                    <img src={Iscrizione7} />
                </div>
                <div class="item10"> Top ten - Western Conference
                    <br /><br />
                    <div class="description"> NBA
                    <br />
                    157.870 visualizzazioni
                    <br />
                    4 mese fa
                    </div>
                </div>

                <div class="item11">
                    <img src={Iscrizione8} />
                </div>
                    <div class="item12"> Kata Shotokan
                    <br /><br />
                    <div class="description"> World Karate Federation
                    <br />
                    17.396 visualizzazioni
                    <br />
                    5 settimane fa
                    </div>
                </div>
            </div>

<br />
<p class="p-title-art">
    <h4 class="title-art">Di tendenza</h4>
<br />
</p>
            <div class="video-col">
                <div class="item1">
                    <video controls>
                    <source src="https://asmassets.mtvnservices.com/asm/mtv_international/italy/2019/IT_Binda_BreilEden_video_15s_dec19.mp4" />             
                    </video>
                </div>
                <div class="item2">
                    <video controls>
                    <source src="https://youtu.be/9TNqvlkwqlQ" />
                    </video>
                </div>
                <div class="item3">
                    <video controls>
                    <source src="https://youtu.be/3yr21tW7Iho" />
                    </video>
                </div>
                <div class="item4">
                    <video controls>
                    <source src="https://youtu.be/Uf5iRY3xH40" />
                    </video>
                </div>
            </div>
<br />
<br />
            <div class="video-col-tx">
                <div class="item5">
                    <img src={Iscrizione1} />
                </div> 
                <div class="item6"> Il mistero della strana pioggia
                    <br /><br />
                    <div class="description"> L'Inspiegabile
                    <br />
                    76.676 visualizzazioni
                    <br />
                    2 settimane fa
                </div>
            </div>

                <div class="item7">
                    <img src={Iscrizione2} />
                </div>
                    <div class="item8"> 10 gadget imperdibili di Amazon
                    <br /><br />
                    <div class="description"> beCurious
                    <br />
                    56.603 visualizzazioni
                    <br />
                    3 settimane fa
                    </div>
                </div>

                <div class="item9">
                    <img src={Iscrizione3} />
                </div>
                    <div class="item10"> Le grandi scoperte di...
                    <br /><br />
                    <div class="description"> Infinito
                    <br />
                    37.651 visualizzazioni
                    <br />
                    1 mese fa
                    </div>
                </div>

                <div class="item11">
                    <img src={Iscrizione4} />
                </div>
                    <div class="item12"> 20 curiosit&agrave; dal Giappone
                    <br /><br />
                    <div class="description"> IL LATO POSITIVO
                    <br />
                    5.479 visualizzazioni
                    <br />
                    6 giorni fa
                    </div>
                </div>
            </div>
<p></p>
<br />
            <div class="video-col">

                <div class="item1">
                    <video controls>
                    <source src="https://youtu.be/1P1QUn87tWw" />             
                    </video>
                </div>
                <div class="item2">
                    <video controls>
                    <source src="https://youtu.be/9TNqvlkwqlQ" />
                    </video>
                </div>
                <div class="item3">
                    <video controls>
                    <source src="https://youtu.be/3yr21tW7Iho" />
                    </video>
                </div>
                <div class="item4">
                    <video controls>
                    <source src="https://youtu.be/Uf5iRY3xH40" />
                    </video>
                </div>
            </div>
<br />
<br />
            <div class="video-col-tx">
                <div class="item5">
                    <img src={Iscrizione5} />
                </div> 
                <div class="item6"> 10 alimenti con pi&ugrave; vitamina C
                    <br /><br />
                    <div class="description"> Alimenti (Roberto Andrioli)
                    <br />
                    10.003 visualizzazioni
                    <br />
                    10 mesi fa
                    </div>
                </div>

                <div class="item7">
                    <img src={Iscrizione6} />
                </div>
                <div class="item8"> Difesa da pugno basso
                    <br /><br />
                    <div class="description"> Krav Maga
                    <br />
                    7.243 visualizzazioni
                    <br />
                    2 anni fa
                    </div>
                </div>

                <div class="item9">
                    <img src={Iscrizione7} />
                </div>
                <div class="item10"> Top ten - Western Conference
                    <br /><br />
                    <div class="description"> NBA
                    <br />
                    157.870 visualizzazioni
                    <br />
                    4 mese fa
                    </div>
                </div>

                <div class="item11">
                    <img src={Iscrizione8} />
                </div>
                    <div class="item12"> Kata Shotokan
                    <br /><br />
                    <div class="description"> World Karate Federation
                    <br />
                    17.396 visualizzazioni
                    <br />
                    5 settimane fa
                    </div>
                </div>
            </div>


    </article>
</div>

    );
}

export default ArticleBar;
