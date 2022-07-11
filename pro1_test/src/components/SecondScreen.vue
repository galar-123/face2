<template>
  <div class="second">
    <h1>为什么这些<span style="color:rgb(255,139,100);">房东</span>选择<span style="color:rgb(255,139,100);">Garantme</span>的租客?</h1>
    <div class="content">
        <div class="list">
            <div>
                <img src="../../public/权威解读.png" alt="">
                <div>权威认证文件</div>
                <div>文件严格符合房东的<b>要求</b>，相关证明文件已被<b>审核认证</b></div>
            </div>
            <div>
                    <img src="../../public/对勾.png" alt="">
                    <div>租金全面保证</div>
                    <div>被担保金额高达<b>90000</b></div>
            </div>
            <div>
                    <img src="../../public/菜单.png" alt="">
                    <div>程序简单</div>
                    <div><b>无纸化</b>担保已于<b>一天</b>之内出具，司法程序由Garantme负责</div>
            </div>
        </div>
     
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .second{
   
        margin: 80px 30px;
    }

  @media screen and (max-width:675px){
    .list{
        margin: 30px auto;
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        justify-content:stretch;
        grid-gap: 20px 20px;    
        float: left;
        div{
            margin-top: 25px;
            text-align: left;
        }
    }
  }
        @media screen and (max-width:375px){
        .list{
            grid-template-columns: repeat(1,100%);
        }
  }
    img+div{
        color: #FF7706;
        font-weight: 800;
    }
    .list div img{
        width:50px;
    }


</style>