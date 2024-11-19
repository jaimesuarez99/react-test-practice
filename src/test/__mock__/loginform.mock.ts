import { payload, User, FormData } from "~/models";
export const mockUser: User = {
  id: 2,
  username: "michaelw",
  email: "michael.williams@x.dummyjson.com",
  firstName: "Michael",
  lastName: "Williams",
  gender: "male",
  image: '"https://dummyjson.com/icon/michaelw/128"',
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTczMTUyNzMwNywiZXhwIjoxNzMxNTI5MTA3fQ.GXBITsnUA5dQViyrwjh6lqioZnEiVTYcNB8w4LgBVMo",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTczMTUyNzMwNywiZXhwIjoxNzM0MTE5MzA3fQ.aqddBVWAu3maDTtoMu6aUuMPMIsz2hVe7PwuC64LRjU",
};

export const mockError: Error = new Error("Invalid Credentials");

export const reqPayloadMock: payload = {
  username: "michaelw",
  password: "michaelwpass",
  expiresInMins: 30,
};

export const inputDataMock: FormData = {
  username: "michaelw",
  password: "michaelwpass",
};

export const urlReqMock = "https://dummyjson.com/auth/login";
