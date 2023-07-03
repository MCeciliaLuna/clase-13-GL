import { _id, _name } from "./data.js";

export const _user = (index) => {
  return {
    id: _id[index],
    name: _name[index],
  };
};
