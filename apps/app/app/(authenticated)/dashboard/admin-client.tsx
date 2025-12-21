"use client";

import { CoreAdmin, Resource } from "ra-core";
import { dataProvider } from "./data-provider";
import { UserList } from "./users/list";
import { UserEdit } from "./users/edit";
import { UserCreate } from "./users/create";

const AdminClient = () => {
  return (
    <CoreAdmin dataProvider={dataProvider} requireAuth>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </CoreAdmin>
  );
};

export default AdminClient;
