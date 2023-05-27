<template>
    <!-- 面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>系统配置</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="hover">
        <!-- 搜索区域 -->
        <el-form :model="searchData" label-position="top" label-width="120px" label-suffix=": " size="mini">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="searchData.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="searchData.sex" placeholder="请选择性别">
                            <el-option label="男" value="man"></el-option>
                            <el-option label="女" value="women"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="电话" prop="phone">
                        <el-input v-model="searchData.phone" placeholder="请输入电话"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="住址" prop="address">
                        <el-input v-model="searchData.address" placeholder="请输入住址"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="searchBtn">
                <el-col align="center">
                    <el-button type="primary" icon="Search" size="mini" @click="searchTable"></el-button>
                    <el-button size="mini" @click="resetQuery">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-row class="searchBtn">
            <el-col align="right">
                <el-button type="primary" icon="Plus" size="mini" @click="addUser"></el-button>
            </el-col>
        </el-row>
        <el-table :data="tableData" style="width: 100%;" border>
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="sex" label="性别" width="180" />
            <el-table-column prop="phone" label="电话" width="180" />
            <el-table-column prop="address" label="住址" />
            <el-table-column fixed="right" label="操作" width="150">
                <template #default>
                    <el-button type="primary" icon="Edit" circle size="mini" @click="updateUser"></el-button>
                    <el-button type="danger" icon="Delete" circle size="mini" @click="removeUser"></el-button>
                    <el-button type="info" icon="Message" circle size="mini" @click="userDetail"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row>
            <el-col align="right">
                <el-pagination :currentPage="currentPage" :page-size="pageSize" :page-sizes="pageSeizes" :small="true"
                    :background="true" layout="total, sizes, prev, pager, next, jumper" :total="400"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange">
                </el-pagination>
            </el-col>
        </el-row>
        <addUser :visible="dialogVisible"></addUser>
    </el-card>
</template>

<script lang="ts">
import {
    ref
} from 'vue';
import addUser from './add-user';
export default {
    name: 'user-manage',
    components: {},
    setup() {
        const tableData: TableData = [{
            phone: '13355667788',
            name: 'Tom',
            sex: '女',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            phone: '13355667799',
            name: 'Tom',
            sex: '男',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            phone: '13355668899',
            name: 'Tom',
            sex: '女',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            phone: '13355666699',
            name: 'Tom',
            sex: '男',
            address: 'No. 189, Grove St, Los Angeles',
        }
        ];
        type TableData = {
            phone: string;
            name: string;
            sex: String,
            address: string;
        }[];
        const searchData: SearchData = {
            name: '',
            sex: '',
            address: '',
            phone: ''
        };
        type SearchData = {
            name: string;
            sex: string;
            address: string;
            phone: string;
        };
        let currentPage = ref<Number>(1);
        let pageSize = ref<Number>(15);
        const pageSeizes: number[] = [15, 50, 100, 500];
        let dialogVisible = ref<Boolean>(false);
        // 表格查询
        const searchTable = () => {
            console.log('表格查询');
        };
        // 重置查询
        const resetQuery = () => {
            console.log('重置查询');
        };
        // 新增用户
        const addUser = () => {
            dialogVisible.value = true;
        }
        // 编辑用户
        const updateUser = (row: any) => {
            console.log('编辑用户', row);
        };
        const removeUser = (row: any) => {
            console.log('删除用户', row);
        };
        // 查看详情
        const userDetail = (row: any) => {
            console.log('用户详情', row);
        };
        const handleSizeChange = (val: number) => {
            console.log(`${val} items per page`);
        }
        const handleCurrentChange = (val: number) => {
            console.log(`current page: ${val}`);
        }
        return {
            tableData,
            searchData,
            currentPage,
            pageSize,
            pageSeizes,
            searchTable,
            resetQuery,
            addUser,
            updateUser,
            removeUser,
            userDetail,
            handleSizeChange,
            handleCurrentChange
        }
    }
}
</script>

<style scoped>
.demo-pagination-block+.demo-pagination-block {
    margin-top: 10px;
}

.demo-pagination-block .demonstration {
    margin-bottom: 16px;
}
</style>
