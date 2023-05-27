<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
    <el-form ref="userFormRef" :model="userData" label-width="60px" label-position="left" label-suffix="："
      :rules="rules" form-size="small">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="userData.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="userData.sex" placeholder="请选择性别">
          <el-option label="男" value="man" />
          <el-option label="女" value="woman" />
        </el-select>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="userData.phone" placeholder="请输入电话" />
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="userData.address" placeholder="请输入地址" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="submit">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
  import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
  } from 'vue'
  interface Data {}
  export default defineComponent({
    name: 'addUser',
    props: {},
    components: {

    },
    setup(props, ctx: SetupContext) {
      const data: Data = reactive < Data > ({})
      const dialogVisible = ref(false)
      const userFormRef = ref < FormInstance > ()
      const userData = reactive({
        name: '',
        sex: '',
        phone: '',
        address: ''
      })
      const rules = reactive < FormRules > ({
        name: [{
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur'
          },
        ],
        sex: [{
          required: true,
          message: '请选择性别',
          trigger: 'change',
        }, ],
        phone: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur',
        }, ],
        address: [{
          required: true,
          message: '请输入地址',
          trigger: 'blur',
        }, ]
      })
      return {
        ...toRefs(data),
      }
    },
  })
</script>

<style scoped lang='scss'>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
