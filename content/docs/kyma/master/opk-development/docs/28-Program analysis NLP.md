---
title: 'Program analysis NLP'
type: 'Get Started with OPK'
---

For how to configure voice commands, please consult our pre-sales

## Methods of parsing NLP content

#### Voice command wakes OPK up 

Use voice to wake up opk, you can start parsing from the entry file

- **Voice**: "Play Jay Chou's Song"

- **File**: current project directory  **/app/demo/DemoScreen.tsx**

- **Method**: public render()

- **Variable output**: console.log(this.props);

 ```
    {
        screenProps: {},
        navigation:
        {
        // ...
            state:
            {
                key: 'system_d398ac9f3933f49ad71a7f581dc9eecc_migumusic',
                routeName: 'system_d398ac9f3933f49ad71a7f581dc9eecc_migumusic',
                params:
                {
                    channel: undefined,
                    type: 2,
                    result:
                    {
                        answerTextPlay: false,
                        card: '{}',
                        englishDomain: 'music_1',
                        englishIntent: 'search_music',
                        intent: 'music_1&search_music',
                        nlpData: '{"detail":[{"agent":"task","semantics_flag":1,"query":"***","asrText":"***","source":"OrionRuleBasedGrammar","intent":"search_music","english_domain":"music_1","debug_info":{},"slots":{"singer":[{"ex":{},"dict_name":"nlpmini_migu_singer","slot_id":375609654968321,"slot_type":"NORMAL","text":"***","value":"***"}]},"cmd_dispatch_level":"1","domain":"music_1","skill_response":{},"sn":"ceab356f-a7de-4cc8-ac13-e1d1cbd32a5c","skill_nlu":false,"actions":[],"current_time":"2021-08-18 17:16:22","nlpData":{"misc":{"app":[]}}}],"misc":{"app":[]}}',
                        queryType: 1,
                        sid: 'ceab356f-a7de-4cc8-ac13-e1d1cbd32a5c',
                        skillData: '{}',
                        slots: '{"singer":[{"ex":{},"dict_name":"nlpmini_migu_singer","slot_id":375609654968321,"slot_type":"NORMAL","text":"***","value":"***"}]}',
                        soundAngle: -1,
                        traceId: 'ceab356fa7de4cc8',
                        userText: '***',
                        id: 6578,
                        spinId: '32b9dfb285634038',
                        chainStartTime: 1629278182418000
                    },
                    eventId: -1
                }
            },
        // ...
        }
    }
    ```

- **domain**: corresponding to the value of englishDomain in the example

- **intent**: corresponding to the value of englishIntent in the example

- **Parsing keywords**: corresponding to the value of navigation->state->params->result->nlpData->detail->slots->singer->value in the example, nlpData needs to be converted into an object

Examples of methods are as follows:
```
public render() {
      let obj = this.props.navigation.state.params.result;
      let nlpData_object = JSON.parse(obj.nlpData);    
      return(null);
}
```

#### After OPK has been started, parse the NLP data content


File location: onListenCallback() method of current project directory  **/app/demo/DemoVoice.ts**

```
public onListenCallback(intent: string, result: any, id: number, text: string): boolean {
    console.log(id, intent, result);
    let nlpData_object = JSON.parse(result.nlpData); 
};
```


Continue to parse nlpData_object to obtain the desired content, and deliver it to the server or other places where it is needed
