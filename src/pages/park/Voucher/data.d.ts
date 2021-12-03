export type TableListItem = {
  key: number;
  sex: string;
  nickname: string;
  account: string;
  username: string;
};

export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};
export type TableListParams = {
  status?: string;
  nickname?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};
