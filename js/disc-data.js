1	// ============================================================================
     2	// DISC 검사 문항 (28문항)
     3	// ============================================================================
     4	const questions = [
     5	    // Page 1
     6	    {
     7	        options: [
     8	            { text: "적극적이고 주도적이다", type: "D" },
     9	            { text: "사교적이고 낙관적이다", type: "I" },
    10	            { text: "차분하고 인내심이 있다", type: "S" },
    11	            { text: "신중하고 체계적이다", type: "C" }
    12	        ]
    13	    },
    14	    {
    15	        options: [
    16	            { text: "경쟁적이고 승부욕이 강하다", type: "D" },
    17	            { text: "감정 표현이 자유롭고 열정적이다", type: "I" },
    18	            { text: "안정적이고 변화를 싫어한다", type: "S" },
    19	            { text: "분석적이고 논리적이다", type: "C" }
    20	        ]
    21	    },
    22	    {
    23	        options: [
    24	            { text: "빠른 결정을 내리고 행동한다", type: "D" },
    25	            { text: "사람들과 함께 있는 것을 좋아한다", type: "I" },
    26	            { text: "타인의 감정을 잘 이해한다", type: "S" },
    27	            { text: "정확성과 완벽함을 추구한다", type: "C" }
    28	        ]
    29	    },
    30	    {
    31	        options: [
    32	            { text: "도전적인 상황을 즐긴다", type: "D" },
    33	            { text: "새로운 사람을 만나는 것이 즐겁다", type: "I" },
    34	            { text: "협조적이고 도움을 잘 준다", type: "S" },
    35	            { text: "규칙과 절차를 중요시한다", type: "C" }
    36	        ]
    37	    },
    38	    
    39	    // Page 2
    40	    {
    41	        options: [
    42	            { text: "결과 중심적이고 목표 지향적이다", type: "D" },
    43	            { text: "창의적이고 아이디어가 풍부하다", type: "I" },
    44	            { text: "일관성 있고 예측 가능하다", type: "S" },
    45	            { text: "신중하고 세밀하게 검토한다", type: "C" }
    46	        ]
    47	    },
    48	    {
    49	        options: [
    50	            { text: "직설적이고 솔직하게 말한다", type: "D" },
    51	            { text: "재미있고 유머러스하다", type: "I" },
    52	            { text: "친절하고 온화하다", type: "S" },
    53	            { text: "사실에 기반하여 말한다", type: "C" }
    54	        ]
    55	    },
    56	    {
    57	        options: [
    58	            { text: "통제력과 권한을 선호한다", type: "D" },
    59	            { text: "인정받는 것을 좋아한다", type: "I" },
    60	            { text: "안정감과 보안을 중요시한다", type: "S" },
    61	            { text: "품질과 정확도를 중시한다", type: "C" }
    62	        ]
    63	    },
    64	    {
    65	        options: [
    66	            { text: "독립적으로 일하는 것을 좋아한다", type: "D" },
    67	            { text: "팀워크와 협업을 즐긴다", type: "I" },
    68	            { text: "루틴과 일상을 선호한다", type: "S" },
    69	            { text: "계획적이고 조직적이다", type: "C" }
    70	        ]
    71	    },
    72	    
    73	    // Page 3
    74	    {
    75	        options: [
    76	            { text: "위험을 감수하고 도전한다", type: "D" },
    77	            { text: "자발적이고 즉흥적이다", type: "I" },
    78	            { text: "조심스럽고 신중하다", type: "S" },
    79	            { text: "체계적으로 문제를 해결한다", type: "C" }
    80	        ]
    81	    },
    82	    {
    83	        options: [
    84	            { text: "빠른 속도로 일을 진행한다", type: "D" },
    85	            { text: "다양한 활동을 동시에 즐긴다", type: "I" },
    86	            { text: "꾸준하고 지속적으로 일한다", type: "S" },
    87	            { text: "철저하게 검증하고 확인한다", type: "C" }
    88	        ]
    89	    },
    90	    {
    91	        options: [
    92	            { text: "실용적이고 효율적이다", type: "D" },
    93	            { text: "표현력이 풍부하고 감성적이다", type: "I" },
    94	            { text: "배려심이 깊고 지지적이다", type: "S" },
    95	            { text: "객관적이고 공정하다", type: "C" }
    96	        ]
    97	    },
    98	    {
    99	        options: [
   100	            { text: "강한 의지력을 가지고 있다", type: "D" },
   101	            { text: "긍정적이고 낙천적이다", type: "I" },
   102	            { text: "인내심이 강하고 참을성이 많다", type: "S" },
   103	            { text: "비판적 사고를 잘한다", type: "C" }
   104	        ]
   105	    },
   106	    
   107	    // Page 4
   108	    {
   109	        options: [
   110	            { text: "결단력 있고 단호하다", type: "D" },
   111	            { text: "설득력 있고 영향력이 있다", type: "I" },
   112	            { text: "신뢰할 수 있고 충성스럽다", type: "S" },
   113	            { text: "원칙을 지키고 엄격하다", type: "C" }
   114	        ]
   115	    },
   116	    {
   117	        options: [
   118	            { text: "자신감 있고 당당하다", type: "D" },
   119	            { text: "사교적이고 외향적이다", type: "I" },
   120	            { text: "겸손하고 온순하다", type: "S" },
   121	            { text: "신중하고 조심스럽다", type: "C" }
   122	        ]
   123	    },
   124	    {
   125	        options: [
   126	            { text: "변화를 주도하고 이끈다", type: "D" },
   127	            { text: "분위기를 밝게 만든다", type: "I" },
   128	            { text: "갈등을 피하고 조화를 추구한다", type: "S" },
   129	            { text: "정확성을 위해 시간을 투자한다", type: "C" }
   130	        ]
   131	    },
   132	    {
   133	        options: [
   134	            { text: "성취 지향적이고 야심적이다", type: "D" },
   135	            { text: "열정적이고 흥미로운 일을 좋아한다", type: "I" },
   136	            { text: "안정적이고 평화로운 환경을 선호한다", type: "S" },
   137	            { text: "논리적이고 합리적이다", type: "C" }
   138	        ]
   139	    },
   140	    
   141	    // Page 5
   142	    {
   143	        options: [
   144	            { text: "압박감 속에서 더 잘한다", type: "D" },
   145	            { text: "재미와 즐거움을 추구한다", type: "I" },
   146	            { text: "편안하고 느긋하다", type: "S" },
   147	            { text: "세부사항에 주의를 기울인다", type: "C" }
   148	        ]
   149	    },
   150	    {
   151	        options: [
   152	            { text: "직접적으로 문제를 해결한다", type: "D" },
   153	            { text: "사람들을 동기부여 시킨다", type: "I" },
   154	            { text: "듣는 것을 잘하고 공감한다", type: "S" },
   155	            { text: "데이터와 사실을 분석한다", type: "C" }
   156	        ]
   157	    },
   158	    {
   159	        options: [
   160	            { text: "리더십을 발휘하고 이끈다", type: "D" },
   161	            { text: "관계를 중시하고 네트워킹한다", type: "I" },
   162	            { text: "지원하고 협력하는 역할을 한다", type: "S" },
   163	            { text: "전문성과 정확성을 추구한다", type: "C" }
   164	        ]
   165	    },
   166	    {
   167	        options: [
   168	            { text: "목표 달성에 집중한다", type: "D" },
   169	            { text: "변화와 다양성을 좋아한다", type: "I" },
   170	            { text: "익숙한 것을 선호한다", type: "S" },
   171	            { text: "신중하게 결정을 내린다", type: "C" }
   172	        ]
   173	    },
   174	    
   175	    // Page 6
   176	    {
   177	        options: [
   178	            { text: "경쟁에서 이기는 것을 중요시한다", type: "D" },
   179	            { text: "인기가 있고 주목받는 것을 좋아한다", type: "I" },
   180	            { text: "평온하고 조용한 환경을 좋아한다", type: "S" },
   181	            { text: "정확하고 올바른 것을 중시한다", type: "C" }
   182	        ]
   183	    },
   184	    {
   185	        options: [
   186	            { text: "강하고 단단한 성격이다", type: "D" },
   187	            { text: "매력적이고 친근하다", type: "I" },
   188	            { text: "부드럽고 온화하다", type: "S" },
   189	            { text: "진지하고 사려 깊다", type: "C" }
   190	        ]
   191	    },
   192	    {
   193	        options: [
   194	            { text: "책임감이 강하고 일을 완수한다", type: "D" },
   195	            { text: "긍정적이고 밝은 에너지를 준다", type: "I" },
   196	            { text: "안정감을 주고 의지가 된다", type: "S" },
   197	            { text: "정확하고 실수가 적다", type: "C" }
   198	        ]
   199	    },
   200	    {
   201	        options: [
   202	            { text: "모험적이고 대담하다", type: "D" },
   203	            { text: "표현력이 풍부하고 말을 잘한다", type: "I" },
   204	            { text: "차분하고 침착하다", type: "S" },
   205	            { text: "체계적이고 질서정연하다", type: "C" }
   206	        ]
   207	    },
   208	    
   209	    // Page 7
   210	    {
   211	        options: [
   212	            { text: "결과를 빨리 내고 싶어한다", type: "D" },
   213	            { text: "사람들과 교류하며 에너지를 얻는다", type: "I" },
   214	            { text: "한 가지 일을 오래 지속한다", type: "S" },
   215	            { text: "완벽을 추구하고 실수를 싫어한다", type: "C" }
   216	        ]
   217	    },
   218	    {
   219	        options: [
   220	            { text: "자기주장이 강하고 확신이 있다", type: "D" },
   221	            { text: "낙관적이고 희망적이다", type: "I" },
   222	            { text: "신뢰할 수 있고 믿음직스럽다", type: "S" },
   223	            { text: "신중하고 예의 바르다", type: "C" }
   224	        ]
   225	    },
   226	    {
   227	        options: [
   228	            { text: "도전과 변화를 즐긴다", type: "D" },
   229	            { text: "자유롭고 구속받지 않는 것을 좋아한다", type: "I" },
   230	            { text: "예측 가능하고 안정적인 것을 선호한다", type: "S" },
   231	            { text: "규칙과 기준을 따른다", type: "C" }
   232	        ]
   233	    },
   234	    {
   235	        options: [
   236	            { text: "강인하고 굽히지 않는다", type: "D" },
   237	            { text: "활기차고 에너지가 넘친다", type: "I" },
   238	            { text: "평화롭고 갈등을 피한다", type: "S" },
   239	            { text: "꼼꼼하고 세심하다", type: "C" }
   240	        ]
   241	    }
   242	];
   243	
   244	const questionsPerPage = 4;
   245	const totalPages = Math.ceil(questions.length / questionsPerPage);
   246	
   247	// ============================================================================
   248	// DISC 분석 로직
   249	// ============================================================================
   250	const discProfiles = {
   251	    D: {
   252	        name: "주도형 (Dominance)",
   253	        color: "#EF4444",
   254	        strengths: "결단력이 빠르고 목표 지향적입니다. 도전을 즐기며 결과를 만들어내는 데 강점이 있습니다. 리더십이 강하고 문제를 직접적으로 해결합니다.",
   255	        weaknesses: "인내심이 부족하고 성급할 수 있습니다. 타인의 감정을 간과하거나 지나치게 직설적일 수 있습니다.",
   256	        stressors: [
   257	            "통제력을 잃거나 권한이 제한될 때 스트레스를 받습니다",
   258	            "일의 진행이 지나치게 느리거나 비효율적일 때 답답해합니다",
   259	            "자신의 의견이 무시되거나 결정권이 없을 때 불만을 느낍니다",
   260	            "세세한 규칙이나 불필요한 절차가 많을 때 짜증을 냅니다"
   261	        ]
   262	    },
   263	    I: {
   264	        name: "사교형 (Influence)",
   265	        color: "#EAB308",
   266	        strengths: "사교적이고 긍정적인 에너지로 분위기를 밝게 만듭니다. 설득력이 뛰어나고 사람들에게 동기를 부여하는 데 탁월합니다. 창의적이고 열정적입니다.",
   267	        weaknesses: "세부사항을 놓치거나 계획성이 부족할 수 있습니다. 감정에 치우쳐 객관성을 잃을 수 있습니다.",
   268	        stressors: [
   269	            "사회적으로 고립되거나 혼자 일해야 할 때 어려움을 느낍니다",
   270	            "인정받지 못하거나 무시당한다고 느낄 때 상처받습니다",
   271	            "지나치게 세밀하고 반복적인 업무에 흥미를 잃습니다",
   272	            "비판이나 부정적인 피드백을 받을 때 민감하게 반응합니다"
   273	        ]
   274	    },
   275	    S: {
   276	        name: "안정형 (Steadiness)",
   277	        color: "#10B981",
   278	        strengths: "인내심이 강하고 꾸준합니다. 타인을 배려하고 팀의 조화를 중시합니다. 신뢰할 수 있고 충성스러우며 듣는 능력이 뛰어납니다.",
   279	        weaknesses: "변화에 적응하는 것이 어렵고 우유부단할 수 있습니다. 자신의 의견을 주장하는 데 소극적일 수 있습니다.",
   280	        stressors: [
   281	            "급격한 변화나 예측 불가능한 상황에 직면할 때 불안해합니다",
   282	            "갈등 상황이나 대립이 발생할 때 큰 스트레스를 받습니다",
   283	            "과도한 압박이나 빠른 의사결정을 요구받을 때 부담을 느낍니다",
   284	            "팀의 조화가 깨지거나 불공평한 대우를 받을 때 힘들어합니다"
   285	        ]
   286	    },
   287	    C: {
   288	        name: "신중형 (Conscientiousness)",
   289	        color: "#3B82F6",
   290	        strengths: "분석적이고 논리적입니다. 정확성과 품질을 중시하며 체계적으로 일을 처리합니다. 문제를 깊이 있게 사고하고 완벽을 추구합니다.",
   291	        weaknesses: "지나치게 신중하여 결정이 느릴 수 있습니다. 완벽주의로 인해 스트레스를 받거나 융통성이 부족할 수 있습니다.",
   292	        stressors: [
   293	            "불명확한 지시나 모호한 기준으로 일해야 할 때 혼란스러워합니다",
   294	            "충분한 준비나 검토 시간 없이 결정을 내려야 할 때 불안해합니다",
   295	            "실수나 오류가 발생했을 때 자책하며 큰 스트레스를 받습니다",
   296	            "질이 낮거나 체계가 없는 환경에서 일할 때 답답해합니다"
   297	        ]
   298	    }
   299	};
   300	
   301	function calculateDISCScores(answers) {
   302	    const scores = { D: 0, I: 0, S: 0, C: 0 };
   303	    
   304	    answers.forEach(answer => {
   305	        if (answer.most) {
   306	            scores[answer.most] += 2;
   307	        }
   308	        if (answer.least) {
   309	            scores[answer.least] -= 1;
   310	        }
   311	    });
   312	    
   313	    Object.keys(scores).forEach(key => {
   314	        if (scores[key] < 0) scores[key] = 0;
   315	    });
   316	    
   317	    return scores;
   318	}
   319	
   320	function getDISCTypes(scores) {
   321	    const sortedTypes = Object.entries(scores)
   322	        .sort(([, a], [, b]) => b - a);
   323	    
   324	    return {
   325	        main: sortedTypes[0][0],
   326	        sub: sortedTypes[1][0],
   327	        scores: scores
   328	    };
   329	}
   330	
   331	function calculatePercentages(scores) {
   332	    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
   333	    const percentages = {};
   334	    
   335	    Object.keys(scores).forEach(key => {
   336	        percentages[key] = total > 0 ? Math.round((scores[key] / total) * 100) : 0;
   337	    });
   338	    
   339	    return percentages;
   340	}
   341	
   342	function analyzeTeam(members) {
   343	    if (!members || members.length === 0) {
   344	        return null;
   345	    }
   346	    
   347	    const typeDistribution = { D: 0, I: 0, S: 0, C: 0 };
   348	    const totalScores = { D: 0, I: 0, S: 0, C: 0 };
   349	    
   350	    members.forEach(member => {
   351	        typeDistribution[member.main_type]++;
   352	        totalScores.D += member.d_score;
   353	        totalScores.I += member.i_score;
   354	        totalScores.S += member.s_score;
   355	        totalScores.C += member.c_score;
   356	    });
   357	    
   358	    const avgScores = {};
   359	    Object.keys(totalScores).forEach(key => {
   360	        avgScores[key] = Math.round(totalScores[key] / members.length);
   361	    });
   362	    
   363	    const dominantTypes = Object.entries(typeDistribution)
   364	        .filter(([, count]) => count > 0)
   365	        .sort(([, a], [, b]) => b - a);
   366	    
   367	    const teamStrengths = generateTeamStrengths(typeDistribution, avgScores, members.length);
   368	    const teamWeaknesses = generateTeamWeaknesses(typeDistribution, avgScores, members.length);
   369	    const teamSummary = generateTeamSummary(typeDistribution, dominantTypes, members.length);
   370	    
   371	    return {
   372	        distribution: typeDistribution,
   373	        avgScores: avgScores,
   374	        dominantTypes: dominantTypes,
   375	        strengths: teamStrengths,
   376	        weaknesses: teamWeaknesses,
   377	        summary: teamSummary
   378	    };
   379	}
   380	
   381	function generateTeamStrengths(distribution, avgScores, memberCount) {
   382	    const strengths = [];
   383	    
   384	    if (distribution.D > memberCount * 0.3) {
   385	        strengths.push("팀에 주도적이고 결단력 있는 리더가 많아 목표 달성에 강합니다");
   386	    }
   387	    if (distribution.I > memberCount * 0.3) {
   388	        strengths.push("사교적이고 창의적인 분위기로 팀워크와 소통이 원활합니다");
   389	    }
   390	    if (distribution.S > memberCount * 0.3) {
   391	        strengths.push("안정적이고 협조적인 팀으로 꾸준한 업무 수행 능력이 뛰어납니다");
   392	    }
   393	    if (distribution.C > memberCount * 0.3) {
   394	        strengths.push("체계적이고 분석적인 접근으로 정확성과 품질이 높습니다");
   395	    }
   396	    
   397	    if (strengths.length === 0) {
   398	        strengths.push("다양한 성향이 균형있게 분포된 팀으로 상황에 따른 유연한 대응이 가능합니다");
   399	    }
   400	    
   401	    return strengths.join(". ");
   402	}
   403	
   404	function generateTeamWeaknesses(distribution, avgScores, memberCount) {
   405	    const weaknesses = [];
   406	    
   407	    if (distribution.D > memberCount * 0.5) {
   408	        weaknesses.push("주도형이 많아 의견 충돌이나 과도한 경쟁이 발생할 수 있습니다");
   409	    }
   410	    if (distribution.I > memberCount * 0.5) {
   411	        weaknesses.push("사교형이 많아 세부사항 관리나 계획 실행이 약할 수 있습니다");
   412	    }
   413	    if (distribution.S > memberCount * 0.5) {
   414	        weaknesses.push("안정형이 많아 변화나 혁신이 필요한 상황에서 소극적일 수 있습니다");
   415	    }
   416	    if (distribution.C > memberCount * 0.5) {
   417	        weaknesses.push("신중형이 많아 의사결정이 느리고 과도한 분석에 시간이 소요될 수 있습니다");
   418	    }
   419	    
   420	    if (weaknesses.length === 0) {
   421	        const minType = Object.entries(distribution).sort(([, a], [, b]) => a - b)[0];
   422	        if (minType[1] === 0) {
   423	            const typeNames = { D: "추진력", I: "사교성", S: "안정성", C: "분석력" };
   424	            weaknesses.push(`${typeNames[minType[0]]}이 부족하여 해당 영역에서 보완이 필요할 수 있습니다`);
   425	        } else {
   426	            weaknesses.push("전반적으로 균형잡힌 팀이나 상황에 따라 특정 역량이 더 필요할 수 있습니다");
   427	        }
   428	    }
   429	    
   430	    return weaknesses.join(". ");
   431	}
   432	
   433	function generateTeamSummary(distribution, dominantTypes, memberCount) {
   434	    const summary = [];
   435	    
   436	    if (dominantTypes.length > 0 && dominantTypes[0][1] > memberCount * 0.4) {
   437	        const mainType = dominantTypes[0][0];
   438	        const typeName = { D: "주도형", I: "사교형", S: "안정형", C: "신중형" }[mainType];
   439	        summary.push(`이 팀은 ${typeName}이 주를 이루는 팀입니다`);
   440	    } else {
   441	        summary.push("이 팀은 다양한 성향이 골고루 분포된 균형잡힌 팀입니다");
   442	    }
   443	    
   444	    const highScores = Object.entries(distribution)
   445	        .filter(([, count]) => count > 0)
   446	        .sort(([, a], [, b]) => b - a);
   447	    
   448	    if (highScores.length >= 2) {
   449	        const type1 = { D: "추진력", I: "소통능력", S: "협조성", C: "분석력" }[highScores[0][0]];
   450	        const type2 = { D: "추진력", I: "소통능력", S: "협조성", C: "분석력" }[highScores[1][0]];
   451	        summary.push(`${type1}과 ${type2}을 겸비하여 프로젝트 수행에 유리합니다`);
   452	    } else {
   453	        summary.push("팀의 특정 강점을 활용하여 성과를 극대화할 수 있습니다");
   454	    }
   455	    
   456	    const lowTypes = Object.entries(distribution)
   457	        .filter(([, count]) => count === 0)
   458	        .map(([type]) => type);
   459	    
   460	    if (lowTypes.length > 0) {
   461	        const suggestions = {
   462	            D: "리더십과 추진력",
   463	            I: "소통과 동기부여",
   464	            S: "협조와 안정성",
   465	            C: "체계성과 분석"
   466	        };
   467	        summary.push(`${suggestions[lowTypes[0]]} 측면을 보완하면 더욱 완성도 높은 팀이 될 것입니다`);
   468	    } else {
   469	        summary.push("각 구성원의 강점을 살려 협업한다면 시너지가 극대화될 것입니다");
   470	    }
   471	    
   472	    return summary;
   473	}
