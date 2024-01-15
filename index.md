---
layout: default
title: 首頁
room1: 豪華4人房 302
room2: 豪華4人房 202
room3: 豪華2人房 201
des1: 以精心挑選的高級傢俱和華麗裝飾營造出優雅舒適的氛圍。每一個細節都訴說著品味和精緻
des2: 體驗無與倫比的尊貴舒適感，我們的房間設計充滿著舒適和寬敞，配備了最柔軟的床品和高級的浴室設施
des3: 我們的團隊將全心全意照顧您的需求，確保您享受到精心準備的特殊待遇，讓您感受到獨特的尊榮
---

{% assign folder_path = '/assets/images/index/slide' %}
{% assign image_count = 0 %}
{% assign folder_name = '/' | append: filename | append: '/' %}
{% for file in site.static_files %}
{% if file.path contains folder_path and file.path contains '.jpg' %}
{% assign image_count = image_count | plus: 1 %}
{% endif %}
{% endfor %}



<section id="billboard" class="position-relative overflow-hidden">
  <div class="swiper main-swiper">
    <div class="swiper-wrapper">

      {% for i in (1..image_count) %}
      {% assign image_count = i | plus: 1 %}
      {% assign room_var = 'room' | append: i %}
      {% assign des_var = 'des' | append: i %}

      <div class="swiper-slide"
        style="background-image: url(/assets/images/index/slide/banner-image{{i}}.jpg); background-size: cover; background-repeat: no-repeat; height: 100vh; background-position: center;">
        <div class="container ">
          <div class="row">
            <div class="offset-md-1 col-md-6">
              <div class="banner-content ">
                <h2 class="text-black-50">{{ page[room_var] }} </h2>
                <p class="fs-3">{{ page[des_var] }}</p>
                <a href="room{{i}}.html" class="btn">Learn More</a>
              </div>
            </div>
            <div class="col-md-5"></div>
          </div>
        </div>
      </div>
      {%endfor%}
    </div>
    <div class="main-slider-pagination position-absolute text-center"></div>
  </div>
</section>


<section id="about" class="padding-large">
  <div class="container">
    <div class="row">
      <div class="offset-md-2 col-md-8">
        <span class="title-accent fs-6 text-uppercase" data-aos="fade" data-aos-easing="ease-in"
          data-aos-duration="1000" data-aos-once="true">Enjoy Penghu</span>
        <h3 class="py-3" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1500" data-aos-once="true">
          心累了，就來澎湖吧！</h3>
        <p data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1800" data-aos-once="true">
          如果你愛海洋，澎湖絕對是你的天堂。這裡有豐富的水上活動，包括浮潛、潛水、風帆等等，讓你盡情嬉戲在碧藍的海水中。無論你是新手還是經驗豐富的水上運動愛好者，澎湖都能滿足你的需求。這裡的海洋生態豐富多彩，你可以在水下世界中與繽紛的珊瑚、魚群相遇，這種與大自然的親密接觸令人心曠神怡。
        </p>
        <p data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1800" data-aos-once="true">
          澎湖，是一個適合放鬆身心、享受閒暇時光的地方。在這裡，你可以成為一隻快樂的閒魚，隨著潮起潮落，忘卻一切煩憂，沈浸在大自然的懷抱中。無論你是在海灘上曬太陽，還是在海水中盡情嬉戲，都能找到屬於自己的快樂。澎湖，是一個讓人心靈寧靜的寶島，等待著你的到來，讓你成為這片海洋的快樂閒魚。
        </p>
      </div>
    </div>
  </div>
</section>




<section class="post-grid padding-large pt-1 pb-1">
  <div class="container">
      <div class="row d-flex flex-wrap">
          <main class="col-md-12">
              <div class="row">
                  

                  {% for room in site.rooms %}

                  <div class="col-lg-6 mb-2">
                      <div class="card border-0 rounded-0">
                          <div class="card-image zoom-effect">
                              <a href="{{ room.url }}">  <img src="/assets/images/index/cover/{{ room.name | remove: '/' | remove: '.md'  }}.jpg" alt="blog-img" class="zoom-in img-fluid"> </a>
                          </div>
                      </div>
                      <div class="card-body text-capitalize">
                          <div class="card-meta fs-5">
                              <span class="meta-date">{{site.data.settings.site.title}}</span>
                          </div>
                          <h3 class="card-title">
                              <a href="{{ post.url }}">{{ room.title }}</a>
                          </h3>
                      </div>
                  </div>

                  {%endfor%}

              </div>
          </main>
      </div>
  </div>
</section>

















<section id="faqs" class="padding-large">
    <div class="container">
        <div class="row">
            <div class="offset-md-2 col-md-8">
                <h3 class="text-center mb-5" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000"
                    data-aos-once="true">澎湖旅遊常見問題</h3>
                <div class="accordion accordion-flush" id="accordionFlush" data-aos="fade" data-aos-easing="ease-in"
                    data-aos-duration="1500" data-aos-once="true">

                    <div class="accordion-item">
                        <h4 class="accordion-header" id="flush-headingOne3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#n1" aria-expanded="true" aria-controls="n1">
                                嘉義布袋港位置
                            </button>
                        </h4>
                        <div id="n1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <h4>★布袋港旅客服務中心：嘉義縣布袋鎮中山路334-1號</h4>
                                <p>注意!!! 『布袋遊客中心』非『布袋港旅客服務中心』，兩者相差30分鐘的步行距離
                                    嘉義縣布袋鎮有3個港口：布袋漁港、布袋商港及布袋遊艇港；到澎湖務必至布袋商港搭船，3個港相隔距離有1至2公里
                                    建議首搭或對港區不熟的遊客，可先打電話詢問位置。布袋港旅客服務中心電話： (05) 347-5267
                                </p>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14648.998845006507!2d120.13949!3d23.379182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346c29cb24c32ecb%3A0xd28f5a238dac7b9a!2z5biD6KKL5riv5peF5a6i5pyN5YuZ5Lit5b-D!5e0!3m2!1szh-TW!2sus!4v1704419061896!5m2!1szh-TW!2sus"
                                    width="100%" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade" aria-label="google 地圖"></iframe>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h4 class="accordion-header" id="flush-headingTwo3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#n2" aria-expanded="true" aria-controls="n2">
                                嘉義布袋港取票流程
                            </button>
                        </h4>
                        <div id="n2" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">

                                <h4>★搭船的朋友們請注意、請於開航前60分鐘至櫃台報到，開航前20分鐘結束通關 </h4>
                                <ul>
                                    <li>進去布袋港旅客服務中心後，您就會看到有許多櫃台，此時您就要看您是訂哪間船公司的船再去相對應的船公司櫃台取票</li>
                                    <li>小提醒~請攜帶身份證(或駕照正本、健保卡)、兒童請攜帶戶口名簿或健保卡</li>
                                    <li>其他如持有殘障手冊、外籍人士須持居留證或旅遊證正本，亦請攜帶以便辦理登機通關手續，否則無法登船的!!!</li>
                                </ul>

                            </div>
                        </div>
                    </div>




                    <div class="accordion-item">
                        <h4 class="accordion-header" id="flush-headingThree3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#n3" aria-expanded="true" aria-controls="n3">
                                馬公港取票流程
                            </button>
                        </h4>
                        <div id="n3" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <h4>★若於馬公港搭船的旅客請至『馬公港旅客服務中心』取票</h4> <BR>
                                <ul>
                                    <p>旅客中心位於 『馬公港埠大樓』裡，通常取票開放時間為開船前1小時，去程取去程的，回程取回程的，也不可以提早取票</p>
                                    <LI>馬公港旅客服務中心電話：06-926-0666</LI>
                                    <LI>馬公港旅客服務中心地址：澎湖縣馬公市臨海路36之1號</LI>
                                    <LI>Google Map請搜尋：馬公港旅客服務中心</LI>
                                </ul>


                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.148430593324!2d119.56183917494415!3d23.563111995941455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346c5a8cf34a701d%3A0x776198e61f1ee90a!2z6aas5YWs5riv5peF5a6i5pyN5YuZ5Lit5b-D!5e0!3m2!1szh-TW!2sus!4v1704424556675!5m2!1szh-TW!2sus"
                                    width="100%" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade" aria-label="google 地圖"></iframe>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h4 class="accordion-header" id="flush-headingFour3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#n4" aria-expanded="true" aria-controls="n4">
                                搭機需要護照嗎?
                            </button>
                        </h4>
                        <div id="n4" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>澎湖為國內旅遊，搭機只需身分證或健保卡即可。</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h4 class="accordion-header" id="flush-headingFive3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#n5" aria-expanded="true" aria-controls="n5">
                                搭機要提前多久去報到?
                            </button>
                        </h4>
                        <div id="n5" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>搭機的報到時間需提前 60 分鐘，憑身分證或健保卡到指定的航空公司櫃檯換取登機證。</p>
                            </div>
                        </div>
                    </div>



                    <div class="accordion-item">
                        <h4 class="accordion-header" id="flush-headingFive3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#n6" aria-expanded="true" aria-controls="n6">
                                機場報到時可以免費托運多少行李?
                            </button>
                        </h4>
                        <div id="n6" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>每人免費行李託運以10公斤為限，手提行李以7公斤為限，大小不得超過56*36*23CM。</p>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h4 class="accordion-header" id="flush-headingFive3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#n7" aria-expanded="true" aria-controls="n7">
                                身上忘了帶證件，要如何才能搭機?
                            </button>
                        </h4>
                        <div id="n7" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p> 請至航警工作門旁之「未帶身分證件切結申請處」填寫切結書，即可購票搭機。</p>
                            </div>
                        </div>
                    </div>











                </div>
            </div>
        </div>
    </div>
</section>


