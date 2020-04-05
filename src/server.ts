import * as fastify from 'fastify'

import { Server as HttpServer, IncomingMessage, ServerResponse } from 'http'

export type ServerT = HttpServer
export type MessageT = IncomingMessage
export type ResponseT = ServerResponse
export type QueryT = fastify.DefaultQuery
export type ParamsT = fastify.DefaultParams
export type HeadersT = fastify.DefaultHeaders
export type BodyT = fastify.DefaultBody

export type InstanceT = fastify.FastifyInstance<ServerT, MessageT, ResponseT>

export type RequestT<
  Query = QueryT,
  Params = ParamsT,
  Headers = HeadersT,
  Body = BodyT
> = fastify.FastifyRequest<MessageT, Query, Params, Headers, Body>

export type ReplyT = fastify.FastifyReply<ResponseT>

export default function createServer() {
  const server = fastify({logger: true})
  return server
}