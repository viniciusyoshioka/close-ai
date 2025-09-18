
export enum LLM_MODEL_NAME {
  // Hammer
  HAMMER_2_1__0_5B = 'hammer-2.1-0.5B',
  HAMMER_2_1__0_5B_QUANTIZED = 'hammer-2.1-0.5B-quantized',
  HAMMER_2_1__1_5B = 'hammer-2.1-1.5B',
  HAMMER_2_1__1_5B_QUANTIZED = 'hammer-2.1-1.5B-quantized',
  HAMMER_2_1__3B = 'hammer-2.1-3B',
  HAMMER_2_1__3B_QUANTIZED = 'hammer-2.1-3B-quantized',

  // Qwen
  QWEN_2_5__0_5B = 'qwen-2.5-0.5B',
  QWEN_2_5__0_5B_QUANTIZED = 'qwen-2.5-0.5B-quantized',
  QWEN_2_5__1_5B = 'qwen-2.5-1.5B',
  QWEN_2_5__1_5B_QUANTIZED = 'qwen-2.5-1.5B-quantized',
  QWEN_2_5__3B = 'qwen-2.5-3B',
  QWEN_2_5__3B_QUANTIZED = 'qwen-2.5-3B-quantized',

  QWEN_3__0_6B = 'qwen-3-0.6B',
  QWEN_3__0_6B_QUANTIZED = 'qwen-3-0.6B-quantized',
  QWEN_3__1_7B = 'qwen-3-1.7B',
  QWEN_3__1_7B_QUANTIZED = 'qwen-3-1.7B-quantized',
  QWEN_3__4B = 'qwen-3-4B',
  QWEN_3__4B_QUANTIZED = 'qwen-3-4B-quantized',

  // Phi
  PHI_4_MINI__4B = 'phi-4-mini-4B',
  PHI_4_MINI__4B_QUANTIZED = 'phi-4-mini-4B-quantized',

  // SmolLM
  SMOLLM_2__135M = 'smollm-2-135M',
  SMOLLM_2__135M_QUANTIZED = 'smollm-2-135M-quantized',
  SMOLLM_2__360M = 'smollm-2-360M',
  SMOLLM_2__360M_QUANTIZED = 'smollm-2-360M-quantized',
  SMOLLM_2__1_7B = 'smollm-2-1.7B',
  SMOLLM_2__1_7B_QUANTIZED = 'smollm-2-1.7B-quantized',

  // LLaMA
  LLAMA_3_2__1B = 'llama-3.2-1B',
  LLAMA_3_2__1B_SPINQUANT = 'llama-3.2-1B-spinquant',
  LLAMA_3_2__1B_QLORA = 'llama-3.2-1B-qlora',
  LLAMA_3_2__3B = 'llama-3.2-3B',
  LLAMA_3_2__3B_SPINQUANT = 'llama-3.2-3B-spinquant',
  LLAMA_3_2__3B_QLORA = 'llama-3.2-3B-qlora',
}


export interface ModelSource {
  model: string
  tokenizerSource: string
  tokenizerSourceConfig: string
}

export type ModelConfigs = {
  [K in LLM_MODEL_NAME]: string
}


export class LlmModelsConfigs {
  static fileNames: ModelConfigs = {
    [LLM_MODEL_NAME.HAMMER_2_1__0_5B]: 'hammer-2.1-0.5B.pte',
    [LLM_MODEL_NAME.HAMMER_2_1__0_5B_QUANTIZED]: 'hammer-2.1-0.5B-quantized.pte',
    [LLM_MODEL_NAME.HAMMER_2_1__1_5B]: 'hammer-2.1-1.5B.pte',
    [LLM_MODEL_NAME.HAMMER_2_1__1_5B_QUANTIZED]: 'hammer-2.1-1.5B-quantized.pte',
    [LLM_MODEL_NAME.HAMMER_2_1__3B]: 'hammer-2.1-3B.pte',
    [LLM_MODEL_NAME.HAMMER_2_1__3B_QUANTIZED]: 'hammer-2.1-3B-quantized.pte',
    [LLM_MODEL_NAME.QWEN_2_5__0_5B]: 'qwen-2.5-0.5B.pte',
    [LLM_MODEL_NAME.QWEN_2_5__0_5B_QUANTIZED]: 'qwen-2.5-0.5B-quantized.pte',
    [LLM_MODEL_NAME.QWEN_2_5__1_5B]: 'qwen-2.5-1.5B.pte',
    [LLM_MODEL_NAME.QWEN_2_5__1_5B_QUANTIZED]: 'qwen-2.5-1.5B-quantized.pte',
    [LLM_MODEL_NAME.QWEN_2_5__3B]: 'qwen-2.5-3B.pte',
    [LLM_MODEL_NAME.QWEN_2_5__3B_QUANTIZED]: 'qwen-2.5-3B-quantized.pte',
    [LLM_MODEL_NAME.QWEN_3__0_6B]: 'qwen-3-0.6B.pte',
    [LLM_MODEL_NAME.QWEN_3__0_6B_QUANTIZED]: 'qwen-3-0.6B-quantized.pte',
    [LLM_MODEL_NAME.QWEN_3__1_7B]: 'qwen-3-1.7B.pte',
    [LLM_MODEL_NAME.QWEN_3__1_7B_QUANTIZED]: 'qwen-3-1.7B-quantized.pte',
    [LLM_MODEL_NAME.QWEN_3__4B]: 'qwen-3-4B.pte',
    [LLM_MODEL_NAME.QWEN_3__4B_QUANTIZED]: 'qwen-3-4B-quantized.pte',
    [LLM_MODEL_NAME.PHI_4_MINI__4B]: 'phi-4-mini-4B.pte',
    [LLM_MODEL_NAME.PHI_4_MINI__4B_QUANTIZED]: 'phi-4-mini-4B-quantized.pte',
    [LLM_MODEL_NAME.SMOLLM_2__135M]: 'smollm-2-135M.pte',
    [LLM_MODEL_NAME.SMOLLM_2__135M_QUANTIZED]: 'smollm-2-135M-quantized.pte',
    [LLM_MODEL_NAME.SMOLLM_2__360M]: 'smollm-2-360M.pte',
    [LLM_MODEL_NAME.SMOLLM_2__360M_QUANTIZED]: 'smollm-2-360M-quantized.pte',
    [LLM_MODEL_NAME.SMOLLM_2__1_7B]: 'smollm-2-1.7B.pte',
    [LLM_MODEL_NAME.SMOLLM_2__1_7B_QUANTIZED]: 'smollm-2-1.7B-quantized.pte',
    [LLM_MODEL_NAME.LLAMA_3_2__1B]: 'llama-3.2-1B.pte',
    [LLM_MODEL_NAME.LLAMA_3_2__1B_SPINQUANT]: 'llama-3.2-1B-spinquant.pte',
    [LLM_MODEL_NAME.LLAMA_3_2__1B_QLORA]: 'llama-3.2-1B-qlora.pte',
    [LLM_MODEL_NAME.LLAMA_3_2__3B]: 'llama-3.2-3B.pte',
    [LLM_MODEL_NAME.LLAMA_3_2__3B_SPINQUANT]: 'llama-3.2-3B-spinquant.pte',
    [LLM_MODEL_NAME.LLAMA_3_2__3B_QLORA]: 'llama-3.2-3B-qlora.pte',
  }
}
