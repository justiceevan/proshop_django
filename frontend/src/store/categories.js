import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegun } from "./api";

const slice = createSlice({
  name: "categories",
  initialState: {
    categoryList: [],
    subCategoryList: [],
    loading: false,
    error: null,
  },
  reducers: {
    categoriesRequested: (categories, action) => {
      categories.loading = true;
    },

    categoriesReceived: (categories, action) => {
      categories.categoryList = action.payload;
      categories.loading = false;

      localStorage.setItem(
        "categories",
        JSON.stringify(categories.categoryList)
      );
    },

    subCategoriesReceived: (categories, action) => {
      categories.subCategoryList = action.payload;
      categories.loading = false;

      localStorage.setItem(
        "subCategories",
        JSON.stringify(categories.subCategoryList)
      );
    },

    categoriesRequestFailed: (categories, action) => {
      categories.loading = false;
      categories.error = action.payload;
    },
  },
});

export const {
  categoriesRequested,
  categoriesReceived,
  subCategoriesReceived,
  categoriesRequestFailed,
} = slice.actions;

export default slice.reducer;

// Action creators
const url = "/api/categories";

export const loadCategories = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegun({
      url,
      onStart: categoriesRequested.type,
      onSuccess: categoriesReceived.type,
      onError: categoriesRequestFailed.type,
    })
  );
};

export const loadSubCategories = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegun({
      url: `${url}/sub/`,
      onStart: categoriesRequested.type,
      onSuccess: subCategoriesReceived.type,
      onError: categoriesRequestFailed.type,
    })
  );
};
