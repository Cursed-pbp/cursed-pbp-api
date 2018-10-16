// This is a work around so the test files can find their code once compiled
// typescript understands that src/* is actually ./src/* due to the baseUrl
// in the tsconfig file.
// when compiled the files are actually in ./build/src/*
import path = require("path");


require("app-module-path").addPath("." + path.sep + "build");
import { PostLogic } from "src/functions/posts/lib/postlogic";
import { NodeCallback } from "src/shared/model/nodecallback";

const dotenv = require("dotenv").config({ silent: true });


export function handler(event: any, context: any, callback: NodeCallback) {

  PostLogic.handle(event, context, callback);
}