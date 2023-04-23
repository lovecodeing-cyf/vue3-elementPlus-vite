<template>
  <el-container>
      <el-header>
        <el-row>
          <el-col :span="8" align="left">
            <el-avatar :size="50" src="src\assets\img\avatar.jpg"></el-avatar>
          </el-col>
          <el-col :span="8" align="center">
            vue3+elementPlus+TS+vite
          </el-col>
          <el-col :span="8" align="right">
            <el-button type="warning" icon="SwitchButton" circle size="mini" @click="logOut"></el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row>
            <el-col>
              <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                text-color="#fff"
                unique-opened router
                :default-active="activeMenu"
              >
              <!-- 一级菜单 -->
                <el-sub-menu :index="item.id" v-for="item in menuList" :key='item.id'>
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{item.menuName}}</span>
                  </template>
                  <!-- 二级菜单 -->
                  <el-menu-item
                  :index="'/'+subItem.id"
                  v-for="subItem in item.children"
                  :key="subItem.id"
                  @select="clickMenu('/'+subItem.id)">
                    <el-icon><setting /></el-icon>
                    <span>{{subItem.menuName}}</span>
                  </el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>加油加油</el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
export default {
  name: 'container',
  setup () {
    const activeMenu = ref<String>('');
    const menuList:MenuList = [
      {
        menuName: '系统配置',
        id: 'system-config',
        children: [
          {
            menuName: '用户管理',
            id: 'user-manage'
          },
          {
            menuName: '岗位管理',
            id: 'org-manage'
          }
        ]
      }
    ];
   type MenuList =  {
        menuName: string;
        id: string;
        children: {
            menuName: string;
            id: string;
        }[];
    }[];
    const router = useRouter();
    const logOut = () => {
      // window.sessionStorage.clear()
      router.push('/');
      // ElMessage({
      //   message: '退出成功！',
      //   type: 'success',
      // })
    }
    return { activeMenu, menuList, logOut }
  }
}
</script>
<style scoped>
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    /* line-height: 160px; */
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
