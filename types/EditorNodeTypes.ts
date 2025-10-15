import TriggerNode from "@/components/Nodes/trigger_group/TriggerNode";
import ResponseNode from "@/components/Nodes/response_group/ResponseNode";
import JsonNode from "@/components/Nodes/response_group/JsonNode";
import RequestRouterNode from "@/components/Nodes/trigger_group/RequestRouterNode";

export const EditorNodeTypes = {
    'triggerNode': TriggerNode,
    'resposeNode':ResponseNode,
    'jsonNode': JsonNode,
    'requestRouterNode':RequestRouterNode,
}