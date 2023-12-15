<!--
 * @Author: bz2021
 * @Date: 2023-12-15 18:13:37
 * @Description:  
-->
<template>
	<a-layout
	>
		<a-layout-content >
            <a-space size="middle" direction="vertical" style="margin-right: 0;">
						<div></div>
						<div
							style="
								font-size: 20px;
								font-weight: bolder;
								color: #060077;
							"
						>
							登录到FreeChat
						</div>
						<div></div>
						<a-input
							size="large"
							style="width: 100%"
							placeholder="请输入用户名"
						/>
						<a-input-password
							size="large"
							style="width: 100%"
							placeholder="请输入密码"
						/>
						<div>
							<a-button size="large" @click=""
                            style="width: 49%;"
								>尚未注册？</a-button
							>
							<a-button
								size="large"
								type="primary"
								style="
									color: white;
									background-color: #060077;
									margin-left: 4px;
                                    width: 49%;
								"
								@click=""
								>登录</a-button
							>
						</div>
					</a-space>
		</a-layout-content>
	</a-layout>
</template>

<script setup></script>
