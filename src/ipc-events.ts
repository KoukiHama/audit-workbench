export enum IpcEvents {
  PROJECT_CREATE_SCAN = 'PROJECT_CREATE_SCAN',
  PROJECT_LOAD_SCAN = 'PROJECT_LOAD_SCAN',
  PROJECT_SET_ROOT = 'PROJECT_SET_ROOT',
  PROJECT_DEFINE_COMPONENTS = 'PROJECT_DEFINE_COMPONENTS',
  PROJECT_DEFINE_LICENSES = 'PROJECT_DEFINE_LICENSES',
  PROJECT_INCLUDE_ITEM = 'PROJECT_INCLUDE_ITEM',

  PROJECT_ADD_FILTER = 'PROJECT_ADD_FILTER',
  PROJECT_DELETE_FILTER = 'PROJECT_DELETE_FILTER',

  SCANNER_INIT_SCAN = 'SCANNER_INIT_SCAN',
  SCANNER_FINISH_SCAN = 'SCANNER_FINISH_SCAN',
  SCANNER_UPDATE_STATUS = 'SCANNER_UPDATE_STATUS',
  SCANNER_ERROR_STATUS = 'SCANNER_ERROR_STATUS',
  SCANNER_ABORTED = 'SCANNER_ABORTED',

  UTILS_DEFAULT_PROJECT_PATH = 'UTILS_DEFAULT_PROJECT_PATH',

  INVENTORY_CREATE = 'INVENTORY_CREATE',
  INVENTORY_GET = 'INVENTORY_GET',
  INVENTORY_GET_ALL = 'INVENTORY_GET_ALL',
  INVENTORY_DELETE = 'INVENTORY_DELETE',
  INVENTORY_UPDATE = 'INVENTORY_UPDATE',
  INVENTORY_ATTACH_FILE = 'INVENTORY_ATTACH_FILE',
  INVENTORY_DETACH_FILE = 'INVENTORY_DETACH_FILE',


  COMPONENT_CREATE = 'COMPONENT_CREATE',
  COMPONENT_DELETE = 'COMPONENT_DELETE',
  COMPONENT_GET = 'COMPONENT_GET',
  COMPONENT_GET_ALL = 'COMPONENT_GET_ALL',
  COMPONENT_UPDATE = 'COMPONENT_UPDATE',
  COMPONENT_GET_FILES = 'COMPONENT_GET_FILES',
  COMPONENT_ATTACH_LICENSE = 'COMPONENT_ATTACH_LICENSE',
  COMPONENT_DETACH_LICENSE = 'COMPONENT_DETACH_LICENSE',
  COMPONENT_GROUP_GET_ALL = 'COMPONENT_GROUP_GET_ALL',
  COMPONENT_GROUP_GET = 'COMPONENT_GROUP_GET',

  LICENSE_CREATE = 'LICENSE_CREATE',
  LICENSE_GET = 'LICENSE_GET',
  LICENSE_DELETE = 'LICENSE_DELETE',
  LICENSE_UPDATE = 'LICENSE_UPDATE',

  FILE_GET_CONTENT = 'FILE_GET_CONTENT',
  IGNORED_FILES = 'IGNORED_FILES',
  UNIGNORED_FILES = 'UNIGNORE_FILES',
  FILE_GET = 'FILE_GET',

  RESULTS_GET = 'RESULTS_GET',

  EXPORT_SPDX = 'EXPORT_SPDX',

  WORKSPACE_PROJECT_LIST = 'WORKSPACE_PROJECT_LIST',


}

export const ipcMainEvents = [
  IpcEvents.SCANNER_UPDATE_STATUS,
  IpcEvents.SCANNER_FINISH_SCAN,
  IpcEvents.SCANNER_ERROR_STATUS,
  IpcEvents.SCANNER_ABORTED,
];

export const ipcRendererEvents = [
  IpcEvents.PROJECT_CREATE_SCAN,
  IpcEvents.PROJECT_SET_ROOT,
  IpcEvents.PROJECT_DEFINE_COMPONENTS,
  IpcEvents.PROJECT_DEFINE_LICENSES,
  IpcEvents.PROJECT_INCLUDE_ITEM,
  IpcEvents.PROJECT_ADD_FILTER,
  IpcEvents.PROJECT_DELETE_FILTER,

  IpcEvents.SCANNER_INIT_SCAN,

  IpcEvents.INVENTORY_CREATE,
  IpcEvents.INVENTORY_GET,
  IpcEvents.INVENTORY_GET_ALL,
  IpcEvents.INVENTORY_DELETE,
  IpcEvents.INVENTORY_UPDATE,
  IpcEvents.INVENTORY_ATTACH_FILE,
  IpcEvents.INVENTORY_DETACH_FILE,


  IpcEvents.COMPONENT_CREATE,
  IpcEvents.COMPONENT_DELETE,
  IpcEvents.COMPONENT_GET,
  IpcEvents.COMPONENT_GET_ALL,
  IpcEvents.COMPONENT_DETACH_LICENSE,
  IpcEvents.COMPONENT_ATTACH_LICENSE,
  IpcEvents.COMPONENT_GET_FILES,
  IpcEvents.COMPONENT_GROUP_GET_ALL,
  IpcEvents.COMPONENT_GROUP_GET,

  IpcEvents.LICENSE_CREATE,
  IpcEvents.LICENSE_GET,
  IpcEvents.LICENSE_UPDATE,
  IpcEvents.LICENSE_DELETE,


  IpcEvents.FILE_GET_CONTENT,
  IpcEvents.FILE_GET,
  IpcEvents.IGNORED_FILES,
  IpcEvents.UNIGNORED_FILES,

  IpcEvents.RESULTS_GET,

  IpcEvents.EXPORT_SPDX,

  IpcEvents.UTILS_DEFAULT_PROJECT_PATH,

  IpcEvents.WORKSPACE_PROJECT_LIST,
];
