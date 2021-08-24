import { ParserOptions } from "@babel/parser"

export const PARSER_OPTIONS: ParserOptions = {
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    allowSuperOutsideMethod: true,
    sourceType: `unambiguous`,
    plugins: [
      `jsx`,
      `doExpressions`,
      `objectRestSpread`,
      `typescript`,
      [
        `decorators`,
        {
          decoratorsBeforeExport: true,
        },
      ],
      `classProperties`,
      `classPrivateProperties`,
      `classPrivateMethods`,
      `exportDefaultFrom`,
      `exportNamespaceFrom`,
      `asyncGenerators`,
      `functionBind`,
      `functionSent`,
      `dynamicImport`,
      `numericSeparator`,
      `optionalChaining`,
      `importMeta`,
      `bigInt`,
      `optionalCatchBinding`,
      `throwExpressions`,
      [
        `pipelineOperator`,
        {
          proposal: `minimal`,
        },
      ],
      `nullishCoalescingOperator`,
    ],
  }
  