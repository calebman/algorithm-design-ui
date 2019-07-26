import {
  TooltipButton,
  TooltipButtonGroup,
  CountDown,
  CountTo,
  IconPicker,
  OrgTree
} from '../../../packages'

function getComponentProps(name) {
  const component = {
    TooltipButton,
    TooltipButtonGroup,
    CountDown,
    CountTo,
    IconPicker,
    OrgTree
  }[name]
  return component && component.props ? component.props : {}
}

export default {
  getComponentProps
}
