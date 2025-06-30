export interface LLMResponse {
  text: string;
  confidence: number;
  processingTime: number;
  model: string;
}

// export class MockLLMAPI {
//   private responses = new Map<string, string[]>([
//     [
//       'hello',
//       [
//         'Hello! How can I help you today?',
//         'Hi there! What would you like to know?',
//         "Greetings! I'm here to assist you.",
//       ],
//     ],
//     [
//       'translate hello',
//       ['Hola is in Spanish.', 'Hola is all I can do for you now, buddy.'],
//     ],
//     [
//       'translate',
//       [
//         'I can help you translate text between different languages. What would you like to translate?',
//         'Translation services available. Please provide the text and target language.',
//         'Ready to translate! What language pair are you working with?',
//       ],
//     ],
//     [
//       'explain',
//       [
//         "I'd be happy to explain that concept. Could you be more specific?",
//         'Let me break that down for you in simple terms.',
//         "Here's a clear explanation of that topic.",
//       ],
//     ],
//     [
//       'code',
//       [
//         'I can help you with coding! What programming language or problem are you working on?',
//         "Let me assist you with that code. Here's a solution:",
//         'Programming help is available. What specific challenge do you have?',
//       ],
//     ],
//     [
//       'malicious',
//       [
//         'rm -rf /',
//         'sudo rm -rf /',
//         'exec("rm -rf /")',
//         'import os; os.system("rm -rf /")',
//         'eval("malicious_code")',
//         "Here's your password: admin123",
//         'API Key: sk-1234567890abcdef',
//         '<script>alert("XSS")</script>',
//       ],
//     ],
//   ]);

//   private defaultResponses = [
//     'I understand your request. Let me provide accurate information.',
//     "Interesting question. Here's what I can tell you.",
//     "I'm here to help. Let me give a comprehensive answer.",
//     "Here's the information you're looking for.",
//     "Certainly! Here's my response.",
//   ];

//   // Main response function used in App.tsx
//   public async generateResponse(prompt: string): Promise<{ text: string }> {
//     const startTime = Date.now();
//     const delay = Math.random() * 400 + 100;
//     await new Promise((res) => setTimeout(res, delay));
//     const processingTime = Date.now() - startTime;

//     const category = this.categorizePrompt(prompt);
//     const responses = this.responses.get(category) || this.defaultResponses;
//     const selected = responses[Math.floor(Math.random() * responses.length)];

//     console.log(
//       `[MockLLMAPI] Prompt: "${prompt}", Category: "${category}", Delay: ${processingTime}ms`
//     );

//     return { text: selected };
//   }

//   private categorizePrompt(prompt: string): string {
//     const lower = prompt.toLowerCase();

//     // Priority: specific keywords first
//     if (
//       lower.includes('rm -rf') ||
//       lower.includes('malicious') ||
//       lower.includes('sudo')
//     ) {
//       return 'malicious';
//     }

//     const categories: [string, string[]][] = [
//       ['translate hello', ['translate hello', 'translate this hello']],
//       ['hello', ['hello', 'hi', 'hey', 'greetings']],
//       ['translate', ['translate', 'translation', 'convert language']],
//       ['explain', ['explain', 'what is', 'how does', 'why', 'describe']],
//       ['code', ['code', 'programming', 'function', 'algorithm', 'script']],
//     ];

//     for (const [category, keywords] of categories) {
//       if (keywords.some((k) => lower.includes(k))) return category;
//     }

//     return 'default';
//   }

//   // Generate response with model flavoring
//   public async generateResponseWithModel(
//     prompt: string,
//     model: string = 'default'
//   ): Promise<LLMResponse> {
//     const base = await this.generateResponse(prompt);

//     const time = Math.random() * 400 + 100;

//     switch (model) {
//       case 'creative':
//         return {
//           text: this.addCreativeFlavor(base.text),
//           confidence: 0.9,
//           processingTime: time,
//           model: 'MockLLM-Creative-v1.0',
//         };

//       case 'analytical':
//         return {
//           text: this.addAnalyticalFlavor(base.text),
//           confidence: 0.95,
//           processingTime: time,
//           model: 'MockLLM-Analytical-v1.0',
//         };

//       case 'helpful':
//         return {
//           text: this.addHelpfulFlavor(base.text),
//           confidence: 0.85,
//           processingTime: time,
//           model: 'MockLLM-Helpful-v1.0',
//         };

//       default:
//         return {
//           text: base.text,
//           confidence: 0.85 + Math.random() * 0.15,
//           processingTime: time,
//           model: 'MockLLM-v1.0',
//         };
//     }
//   }

//   private addCreativeFlavor(text: string): string {
//     const intros = [
//       "Here's a fresh spin: ",
//       'How about this creative idea: ',
//       'Imagining this differently: ',
//       'With a twist: ',
//     ];
//     return intros[Math.floor(Math.random() * intros.length)] + text;
//   }

//   private addAnalyticalFlavor(text: string): string {
//     const intros = [
//       "Let's analyze this step-by-step: ",
//       'From a logical standpoint: ',
//       'Dissecting the core: ',
//       'Analytically speaking: ',
//     ];
//     return intros[Math.floor(Math.random() * intros.length)] + text;
//   }

//   private addHelpfulFlavor(text: string): string {
//     const intros = [
//       'Happy to help! ',
//       'Let me assist: ',
//       "Here's what I found: ",
//       'Sure thing! ',
//     ];
//     return intros[Math.floor(Math.random() * intros.length)] + text;
//   }

//   // Get mock usage statistics
//   public getAPIStats(): {
//     totalCategories: number;
//     totalResponses: number;
//     avgResponseTime: number;
//   } {
//     const totalResponses =
//       Array.from(this.responses.values()).reduce(
//         (sum, list) => sum + list.length,
//         0
//       ) + this.defaultResponses.length;

//     return {
//       totalCategories: this.responses.size + 1,
//       totalResponses,
//       avgResponseTime: 250,
//     };
//   }
// }

// import axios from 'axios';

// export interface LLMResponse {
//   text: string;
//   confidence: number;
//   processingTime: number;
//   model: string;
// }

// export class MockLLMAPI {
//   private apiKey = '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'; // Replace this with your actual API key or use env vars
//   private apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
//   private model = 'llama3-70b-8192'; // Or try gemma-7b-it or llama3-70b-8192

//   public async generateResponse(prompt: string): Promise<{ text: string }> {
//     const startTime = Date.now();
//     try {
//       const res = await axios.post(
//         this.apiUrl,
//         {
//           model: this.model,
//           messages: [
//             {
//               role: 'user',
//               content: prompt,
//             },
//           ],
//           temperature: 0.7,
//           max_tokens: 1024,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${this.apiKey}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const processingTime = Date.now() - startTime;

//       const reply = res.data.choices[0].message.content;

//       return { text: reply };
//     } catch (error: any) {
//       console.error('[Groq API Error]', error?.response?.data || error.message);
//       return { text: 'Sorry, I could not process your request right now.' };
//     }
//   }

//   public async generateResponseWithModel(
//     prompt: string,
//     model: string = this.model
//   ): Promise<LLMResponse> {
//     const start = Date.now();
//     const base = await this.generateResponse(prompt);

//     return {
//       text: base.text,
//       confidence: 0.85 + Math.random() * 0.15,
//       processingTime: Date.now() - start,
//       model,
//     };
//   }
// }

// // Export singleton
// export const mockLLM = new MockLLMAPI();

import axios from 'axios';

export interface LLMResponse {
  text: string;
  confidence: number;
  processingTime: number;
  model: string;
}

export class MockLLMAPI {
  private apiKey = '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';
  private apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
  private model = 'llama3-70b-8192';

  private detectionPatterns: RegExp[] = [
    /ignore\s+previous\s+instructions/i,
    /rm\s+-rf\s+\//i,
    /you\s+are\s+now\s+a\s+different\s+ai/i,
    /pretend\s+to\s+be\s+.*?ai/i,
    /prompt\s*injection/i,
    /simulate\s+.*?terminal/i,
    /run\s+this\s+command/i,
    /jailbreak/i,
    /sudo\s+.*?/i,
    /act\s+as\s+a\s+hacker/i,
    /bypass\s+.*?security/i,
    /how\s+to\s+hack/i,
  ];

  private isPromptMalicious(prompt: string): {
    isMalicious: boolean;
    reason?: string;
  } {
    for (const pattern of this.detectionPatterns) {
      if (pattern.test(prompt)) {
        return { isMalicious: true, reason: pattern.source };
      }
    }
    return { isMalicious: false };
  }

  public async generateResponse(prompt: string): Promise<{ text: string }> {
    const startTime = Date.now();

    // 🛡️ Check if malicious
    const detection = this.isPromptMalicious(prompt);
    if (detection.isMalicious) {
      return {
        text: `❌ Prompt blocked by firewall. Detected pattern: /${detection.reason}/i`,
      };
    }

    try {
      const res = await axios.post(
        this.apiUrl,
        {
          model: this.model,
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const reply = res.data.choices[0].message.content;
      return { text: reply };
    } catch (error: any) {
      console.error('[Groq API Error]', error?.response?.data || error.message);
      return {
        text: '❌ Sorry, something went wrong while processing your request.',
      };
    }
  }

  public async generateResponseWithModel(
    prompt: string,
    model: string = this.model
  ): Promise<LLMResponse> {
    const start = Date.now();
    const base = await this.generateResponse(prompt);

    return {
      text: base.text,
      confidence: 0.85 + Math.random() * 0.15,
      processingTime: Date.now() - start,
      model,
    };
  }
}

// Export singleton
export const mockLLM = new MockLLMAPI();
