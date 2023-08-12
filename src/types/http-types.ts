export interface HttpResponse<T = any> {
  data: T;
  response_code: number;
  response_message: string;
}
