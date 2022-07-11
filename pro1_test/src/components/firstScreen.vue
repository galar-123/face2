<template>
  <div class="first">
    <div>
      
        <div><span>租房首选&nbsp;</span><span style="color:rgb(21,0,247);">最优担保人</span></div>
        <div>申请</div>
    </div>
    <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYwIiBoZWlnaHQ9IjUyMiIgdmlld0JveD0iMCAwIDQ2MCA1MjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzE1MDBGNyIgZD0iTTAgMGg0NjB2NTIySDB6Ii8+PHBhdGggb3BhY2l0eT0iLjciIGZpbGw9IiMwRjAwQjgiIGQ9Ik00NSAwaDIyNXYyMTZINDV6Ii8+PGNpcmNsZSBvcGFjaXR5PSIuNyIgY3g9IjMwMS41IiBjeT0iMzQ4LjUiIHI9IjE1OC41IiBmaWxsPSIjMEYwMEI4Ii8+PC9zdmc+" alt="">
        <img src="https://assets.production.garantme.fr/website/_next/static/assets/fonts/img_header-ed77766deaf9202b.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less">
    .first{
        display: flex;
        justify-content: center;
        align-items: center;
        margin:30px 40px;
        display: flex;
        font-size: 40px;
        font-weight: 800;
      
        div:nth-child(1){
            flex: 1;
            margin-right: 3rem;
             div:nth-child(1){
                text-align: left;
            }
            div:nth-child(2){
                background: rgb(21,0,247);
                color:#fff;
                height: 60px;
                line-height: 60px;
                margin-top: 30px;
            }
               div:nth-child(2):hover{
                background: rgb(10,0,122);
            }
        }
        div:nth-child(2){
            flex:1;
            position: relative;
            img{
                width: 90%;
                margin: 0 auto;
           
            }
            img:nth-child(2){
                position: absolute;
                top: 40px;
                left: -20px;
            }
        }
  
    }
    @media screen and (max-device-width:375px){
        .first {
            flex-direction: column;
              div:nth-child(1){
                order:1;
                margin-top: 30px;
                font-size: 18px;
                margin: 40px auto;
            
            }
            div:nth-child(2){
                width: 70%;
                margin: 0 auto;
            }

        }

    }
</style>