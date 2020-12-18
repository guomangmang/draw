# dragTool

### git提交规范
  * feat: 新功能 (feature)
  * fix: 修补bug
  * docs: 文档 (documentation)
  * style: 格式 (不影响代码运行的变动)
  * refactor: 重构(既不是新增功能，也不是修改bug的代码改动)
  * test: 增加测试
  * chore: 构建过程或辅助工具的变动



```
# 安装依赖
npm i
# or
cnpm i

# 启动项目
npm run start
# or
npm run start

#启动beta环境
npm run start:beta

# 启动prod环境
npm run start:prod

# 构建dev版本
npm run build:dev

# 构建beta版本
npm run build:beta

# 构建预生产版本
npm run build:prep

# 运行unit
npm run test:unit

#运行e2e
npm run test:e2e

```

| 命名 | 说明 |
| - | :- | :- | :-: |
| 文件夹命名 | 遵循驼峰命名规则 |
| 组件命名 | 驼峰+首字母大写 |
| 基础组件 | 以Base开头 |
