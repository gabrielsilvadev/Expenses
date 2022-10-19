import { IClient } from "../utils/api/@types/client";

// import AxiosClient from "../utils/api/impl/axios";
import FetchClient from "../utils/api/impl/fetch";

const getClient = (): IClient => new FetchClient("http://192.168.100.66:5000")

const api = getClient()

export default api
