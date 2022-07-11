<template>
 <div>
  
    <div>{{data.list.id}}</div>
     
        <el-table :data="data.list" border style="width: 100%">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="code" label="code" width="180" />
            <el-table-column prop="terminal" label="terminal" />
             <el-table-column prop="flight" label="flight" />
              <el-table-column prop="bigBagNum" label="bigBagNum" />
               <el-table-column prop="smallBagNum" label="smallBagNum" />
                <el-table-column prop="arrivalTime" label="arrivalTime" />
                <el-table-column prop="createTime" label="createTime" />
                <!-- <el-table-column prop="status" label="status" /> -->
                    <el-table-column prop="destinationList" label="destinationList">
                        <el-table-column prop="destinationList[0]">
                            <el-table-column prop="destinationList[0].road"></el-table-column>
                            <el-table-column prop="destinationList[0].postalCode"></el-table-column>
                        </el-table-column>
                           <el-table-column prop="destinationList[1]">
                            <el-table-column prop="destinationList[1].road"></el-table-column>
                            <el-table-column prop="destinationList[1].postalCode"></el-table-column>
                        </el-table-column>
                    </el-table-column>
                     <el-table-column prop="contact" label="contact">
                        <el-table-column prop="contact.name"></el-table-column>
                         <el-table-column prop="contact.phone"></el-table-column>
                         <el-table-column prop="contact.email"></el-table-column>
                    </el-table-column>
        </el-table>
    </div>

</template>

<script>
import {onMounted, reactive, ref} from 'vue'
import axios from 'axios'
  import { ElButton } from 'element-plus'
axios.defaults.baseURL = '/api'
  export default {
      setup() {
    
        let data= reactive({list:""})
      
        onMounted(()=>{
            
                        axios.get("public/order/all").then((res)=>{
                                console.log(res.data.data)
                                data.list=res.data.data
                        })
                         console.log(data.list)
     
        })
       
        return {
            data,
            // tableData
        }
    },
    components: {
        // HelloWorld
        ElButton
    }

  }
</script>

<style>
.content{
    display:block;
    
}

</style>

<!-- 
<template>
 <div>
     <div class="content">哈哈哈</div>
  <div>{{data1.value}}</div>
 </div>
</template>

<script>
import {onMounted, reactive, ref} from 'vue'
import axios from 'axios'

axios.defaults.baseURL = '/api'
  export default {
      setup() {
    
        let data1= reactive({})
      
        onMounted(()=>{
            
                        axios.get("public/order/all").then((res)=>{
                                console.log(res.data.data)
                                data1.value=res.data.data[0]
                        })
                         console.log(data1.value)
     
        })
       
        return {
            data1
        }
    }

  }
</script>

<style>
.content{
    display:block;
    
}

</style> -->