/**
 * Api管理
 */
import request from '@/utils/request'
export default {
  // 登陆
  login (params) {
    return request({
      url: '/users/login',
      data: params
      // mock: false
    })
  },

  // 获取消息数目
  noticeCount (params) {
    return request({
      url: '/leave/count',
      data: params
    })
  },

  // 获取菜单列表
  getMenuList (params) {
    return request({
      url: '/menu/list',
      data: params
    })
  },

  // 获取用户列表
  getUserList (params) {
    return request({
      url: '/users/list',
      data: params
      // mock: false
    })
  },

  // 获取全部用户列表
  getAllUserList (params) {
    return request({
      url: '/users/all/list',
      data: params
      // mock: false
    })
  },

  // 用户删除
  userDelete (params) {
    return request({
      url: '/users/delete',
      data: params
      // mock: false
    })
  },

  // 角色列表
  getAllRoleList (params, isSilence = true) {
    return request({
      url: '/roles/allList',
      data: params,
      isSilence
    })
  },

  // 角色列表
  getRoleList (params, isSilence = true) {
    return request({
      url: '/roles/list',
      data: params
    })
  },

  // 角色操作
  roleOperate (params, isSilence = true) {
    return request({
      url: '/roles/operate',
      data: params
    })
  },

  // 更新权限
  updatePermission (params) {
    return request({
      url: '/roles/update/permission',
      data: params
    })
  },

  // 部门列表
  getDeptList (params) {
    return request({
      url: '/dept/list',
      data: params
    })
  },

  // 部门创建/编辑/删除
  updateDept (params) {
    return request({
      url: '/dept/operate',
      data: params
    })
  },

  // 用户新增/编辑
  updateUser (params) {
    return request({
      url: '/users/operate',
      data: params
      // mock: false
    })
  },

  // 菜单新增/编辑
  menuSubmit (params) {
    return request({
      url: '/menu/operate',
      data: params
      // mock: false
    })
  },

  getPermissionList (params) {
    return request({
      url: '/users/getPermissionList',
      data: params
    })
  },

  // 审批列表-休假申请列表
  getLeaveList (params) {
    return request({
      url: '/leave/list',
      data: params
    })
  },

  // 申请休假
  updateLeaveList (params) {
    return request({
      url: '/leave/operate',
      data: params
    })
  },

  // 审批
  leaveApprove (params) {
    return request({
      url: '/leave/approve',
      data: params
    })
  }
}
