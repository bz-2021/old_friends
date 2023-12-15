<template>
	<a-menu
		v-model:selectedKeys="current"
		mode="horizontal"
		style="display: flex"
	>
		<a-menu-item key="game" @click="loginPage">
			<rocket-outlined></rocket-outlined>
			友情重燃
		</a-menu-item>
		<a-menu-item key="message" title="">
			<CommentOutlined></CommentOutlined>
			消息列表
		</a-menu-item>
		<a-menu-item key="talk">
			<TeamOutlined></TeamOutlined>
			通讯录
		</a-menu-item>

		<a-sub-menu
			key="user"
			style="margin-left: auto"
			:popupOffset="[-40, 10]"
		>
			<template #title>
                <a-avatar src="https://cdn.acwing.com/media/user/profile/photo/183562_lg_b8aaa078f8.jpg" />
				{{ username }}
			</template>

			<a-menu-item key="setting:2">个人资料</a-menu-item>
			<a-menu-item key="setting:3">我的设置</a-menu-item>
			<a-menu-item key="setting:4">退出登录</a-menu-item>
		</a-sub-menu>
		<a-menu-item></a-menu-item>
	</a-menu>
</template>
<script setup>
import { h, ref } from "vue";
import {
	RocketOutlined,
	CommentOutlined,
	TeamOutlined,
} from "@ant-design/icons-vue";
import router from '../../router'
const loginPage = () => {
	router.push('/login')
}
const current = ref(["mail"]);
const username = ref("Username")
</script>
<style scoped>
#data-menu-id {
	margin-left: 100px;
}
</style>
