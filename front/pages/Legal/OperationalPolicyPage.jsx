import React from "react";
import { Box, Container, Typography, Paper, List, ListItem } from '@mui/material';

const OperationalPolicyPage = () => {
    return(
        <Container>
            <Paper sx={{ padding: 3 }}>
                
                <Typography variant="h3" gutterBottom textAlign="center" sx={{ paddingBottom: 5 }}>
                    운영 정책
                </Typography>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        1. 사용 전 꼭 숙지하여 주세요.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        본 운영정책은 BLY(이하 ‘프로젝트 팀’)이 제공하는 BLY계정 서비스 및 다양한 인터넷과 모바일 서비스를 운영함에 있어, 서비스 내에 발생할 수 있는 문제 상황에 대하여 일관성 있게 대처하기 위하여 서비스 운영의 기준과 여러분이 지켜주셔야 할 세부적인 사항이 규정되어 있습니다. 본 운영정책을 지키지 않을 경우 불이익을 당할 수 있으니 주의 깊게 읽어 주시기 바랍니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        본 운영정책에서 별도로 정의하지 않은 용어는 BLY 서비스약관에서 정한 용어의 정의에 따릅니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        프로젝트 팀은 서비스와 관련된 정책을 개선하고자 여러분과의 지속적인 의견 교환을 통해 합리적인 운영정책을 세울 수 있도록 노력하고 있으며, 본 운영정책이 변경되는 경우 최소 7일 전에 공지사항을 통해 공지하도록 하겠습니다.
                    </Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    2. 여러분의 쾌적한 서비스 이용을 위해 운영정책을 적용하고 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    프로젝트 팀은 여러분의 쾌적한 서비스 이용을 위해 운영정책에 근거하여 서비스를 운영하고 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    서비스 이용 중 다른 이용자의 운영정책 위반 행위로 인해 피해를 입으신 경우, 여러분은 이를 프로젝트 팀에 제보하여 운영정책의 적용을 요청할 수 있으며, 프로젝트 팀은 신고 내용을 확인하여 운영정책에 따른 제재 조치를 취할 수 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    또한, 신고가 없더라도, 프로젝트 팀은 관련 법령 또는 약관에 위배되거나 본 운영정책에서 금지하는 활동이 발견된 경우, 운영정책에 따른 제재 조치를 취할 수 있습니다. 그러나, 서비스 내 이용자들 간에 발생하는 분쟁 및 이용자 스스로의 과실로 일어난 피해에 대해서는 개입하거나 조치하지 않습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    신고 또는 기타 방법으로 운영정책에 위반 된 내용이 발견되어 제재가 진행되는 경우, 프로젝트 팀은 게시자에게 서비스 내 알림, 메일 등의 방법으로 제재 내용 등을 최대한 신속히 알리도록 하겠습니다. 다만, 다른 이용자의 긴급한 보호가 필요하거나, 제재 내용 전달이 불가능한 등의 경우에는 그러하지 않을 수 있으며, 검토 결과를 신고자에게 통지할 의무가 있는 것은 아니라는 점을 참고해 주시기 바랍니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    여러분이 운영정책의 적용 결과가 불만족스러울 경우 고객센터를 통해 이의를 신청할 수 있으며, 프로젝트 팀은 접수된 이의제기를 검토하여 수용 여부를 회신 드리겠습니다.
                    </Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    3. 다음과 같은 활동은 금지하고 있습니다.
                    </Typography>

                    <Typography variant="body1" paragraph>
                    ① 계정 생성과 이용 시 금지하는 활동
                    </Typography>
                    
                    <List>
                        <ListItem>(1) 타인의 개인정보 또는 기기를 도용·탈취하거나 허위의 정보를 입력하여 계정과 아이디(이하 ‘계정’으로 통칭)를 생성·이용·탈퇴하는 행위</ListItem>
                        <ListItem>(2) 14세 미만이 법정대리인의 동의 없이 계정을 생성·이용·탈퇴하는 행위</ListItem>
                        <ListItem>(3) 상업적·홍보·광고·악의적 목적으로 시스템의 취약점을 이용하거나, 비정상적으로 계정을 생성·이용·탈퇴하는 행위</ListItem>
                        <ListItem>(4) 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해·파괴하거나, 할 수 있는 방법으로 서비스에 접근·이용하는 행위</ListItem>
                        <ListItem>(5) 계정을 타인에게 판매·양도·대여하거나, 타인에게 그 이용을 허락 또는 이를 시도하는 행위</ListItem>
                        <ListItem>(6) 타인의 계정을 취득하기 위해 구매·양수·교환을 시도하거나 이를 타인에게 알선하는 행위</ListItem>
                        <ListItem>(7) 타인을 기망하여 타인의 계정을 탈취하는 행위</ListItem>
                        <ListItem>(8) 정상적인 서비스 이용으로 볼 수 없는 다량의 계정 생성 및 반복적인 계정 생성과 탈퇴 행위 등 및 이와 유사한 행위</ListItem>
                    </List>

                    <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
                    ② 서비스 이용 시 금지하는 활동
                    </Typography>

                    <List>
                        <ListItem>(1) 불법적인 사행성·도박 사이트를 홍보하는 행위</ListItem>
                        <ListItem>(2) 게임 아이템, 점수, 계정 등 유무형의 결과물을 판매, 구매, 환전하거나 요청하는 행위</ListItem>
                        <ListItem>(3) 불법 제품 또는 인터넷에서 판매 금지된 물품을 판매하거나 홍보하는 행위</ListItem>
                        <ListItem>(4) 범법 행위에 대한 동기 부여 및 실행에 도움이 되는 정보를 제공하는 행위</ListItem>
                        <ListItem>(5) 전기통신사업법에서 금지하는 불법촬영물등을 유통하는 행위</ListItem>
                        <ListItem>(6) 악성코드, 바이러스 등의 프로그램을 설치·유포하여 서비스 이용을 저해하는 행위</ListItem>
                        <ListItem>(7) 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해·파괴하거나, 할 수 있는 행위</ListItem>
                        <ListItem>(8) 타인의 개인정보를 탈취·유포·거래하려는 행위</ListItem>
                        <ListItem>(9) 방송·음원·영화·만화·사진·영상·게시물 등 타인의 저작물을 당사자의 동의 없이 공유하거나, 불법적인 경로로 획득할 수 있는 정보나 방법을 제공하는 행위</ListItem>
                        <ListItem>(10) 타인의 권리에 속하는 상표권, 의장권 등을 무단으로 침해하는 행위</ListItem>
                        <ListItem>(11) 청소년에게 유해한 과도한 신체 노출이나 음란한 행위를 묘사하는 행위</ListItem>
                        <ListItem>(12) 성매매 관련 정보를 공유하는 행위</ListItem>
                        <ListItem>(13) 타인에게 성적 수치심이나 불쾌감·혐오감을 유발할 수 있는 내용을 게시하는 행위</ListItem>
                        <ListItem>(14) 타인의 성을 착취하는 내용을 담은 영상이나 이미지 등의 콘텐츠를 제공하거나, 이를 제공 또는 이용하려는 의사를 적극적으로 표현하는 행위</ListItem>
                        <ListItem>(15) 타인의 성을 착취할 목적으로 협박, 유인하거나 이를 모의, 조장하는 행위</ListItem>
                        <ListItem>(16) 출신(국가, 지역 등)・인종・외양・장애 및 질병 유무・사회 경제적 상황 및 지위・종교・연령・성별・성정체성・성적 지향 또는 기타 정체성 요인 등을 이유로 인간으로서의 존엄성을 훼손하거나, 폭력을 선동하거나, 차별・편견을 조장하는 행위</ListItem>
                        <ListItem>(17) 자살·동반자살을 목적으로 하거나 방조 또는 유인하는 행위</ListItem>
                        <ListItem>(18) 동일한 내용을 동일 개별 서비스 또는 여러 개별 서비스에 반복적으로 등록하는 행위</ListItem>
                        <ListItem>(19) 타인의 명시적인 동의 없이 시스템의 취약점을 이용하여 타인의 게시글 또는 공간에 광고·홍보·방문 유도 등 상업적 내용을 등록·전송하거나 ‘공감’, ‘친구신청’ 등의 활동을 하는 행위</ListItem>
                        <ListItem>(20) 서비스의 명칭 또는 프로젝트 팀의 임직원이나 운영진을 사칭하여 다른 이용자를 속이거나 이득을 취하는 등 피해와 혼란을 주는 행위</ListItem>
                        <ListItem>(21) 욕설·비속어·은어 등의 사용 및 그 외 상식과 사회 통념에 반하는 비정상적인 행위</ListItem>
                        <ListItem>(22) 언론사의 명의나 언론사의 직책 등을 사칭 또는 도용하여 기사 형태를 갖춘 게시물 중 그 내용이 허위로 판단되는 게시물을 게시하는 행위</ListItem>
                        <ListItem>(23) 프로젝트 팀이 허용하지 않은 악의적인 방법으로 서비스를 이용하는 등 서비스의 정상적인 운영을 방해하는 행위</ListItem>
                    </List>
                    
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    4. 계정과 서비스 이용이 제한될 수 있습니다.
                    </Typography>

                    <Typography variant="body1" paragraph>
                    여러분의 활동이 관련 법령에 위배되거나, 관련 약관 또는 운영정책에 위반될 경우 프로젝트 팀은 다른 이용자를 피해로부터 보호하기 위해 여러분의 계정과 서비스 이용을 제한할 수 있습니다. 또한 운영정책에 구체적으로 해당하지 않는 사항이라고 하더라도 건전한 서비스 환경 제공에 악영향을 끼치거나 다른 이용자에게 불편을 끼치는 행위도 이용 제한될 수 있다는 점을 참고해 주시기 바랍니다. 특히 비정상적인 로그인이라고 판단되거나, 약관이나 운영정책을 위반할 가능성이 있는 특별한 이용환경 및 이용패턴이 감지되는 경우 이용자들의 안전한 활동을 보호하기 위하여 이와 동일하거나 유사한 행위를 제한하고 금지하는 이용자 보호조치가 취하여 질 수 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    이용 제한은 위반 활동의 누적 정도에 따라 한시적 제한에서 영구적 제한으로 단계적 제한하는 것을 원칙으로 하지만, 음란한 내용의 게시와 유포 및 사행성 도박 홍보 등 관련 법령에서 금지하는 명백한 불법행위나 긴급한 위험 또는 피해 차단이 요구되는 사안에 대해서는 위반 활동 횟수의 누적 정도와 관계 없이 즉시 영구적으로 이용이 제한될 수 있습니다. 또한 여러분이 통합서비스와 관련된 설비의 오작동이나 시스템의 파괴 및 혼란을 유발하는 등 통합서비스 제공에 악영향을 미치거나 안정적 운영을 심각하게 방해한 경우, 프로젝트 팀은 이러한 위험 활동이 확인된 여러분의 계정들에 대하여 이용을 제한할 수 있다는 점을 유의하여 주시기 바랍니다. 다만, 여러분은 이용제한과 관련하여 조치 결과가 불만족스러울 경우 고객센터를 통해 이의를 제기할 수 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    계정과 서비스 이용 제한에 대한 구체적인 내용은 다음 내용을 참고해 주시기 바랍니다.
                    </Typography>

                    <Typography variant="body1" paragraph>
                    ① 계정 이용 제한
                    </Typography>
                    
                    <List>
                        <ListItem>(1) 계정의 생성이나 이용 과정에서 관련 법령, 관련 약관 또는 운영정책 위반 사항이 발견된 경우, 계정의 생성·이용·탈퇴가 제한될 수 있습니다.</ListItem>
                        <ListItem>(2) 계정을 비정상적으로 생성·이용·탈퇴하려는 시도가 발견된 경우, 해당 계정의 이용 및 탈퇴를 제한하거나, 해당 계정의 비정상적 생성이 계속 될 수 없도록 계정 생성이 제한 될 수도 있으며, 필요할 경우 해당 계정을 삭제하고 재가입을 제한하는 등의 적절한 제한을 할 수 있습니다.</ListItem>
                        <ListItem>(3) 이용 제한은 한시적 제한에서 영구적 제한으로 단계적으로 제한되지만, 즉시 영구적으로 제한되는 경우도 있다는 점을 꼭 잊지 말아 주시기 바랍니다.</ListItem>
                        <ListItem>(4) 여러분의 계정을 타인이 비정상적으로 이용하려는 시도가 발견될 경우, 타인이 여러분의 계정을 무단으로 사용하는 것을 막기 위하여 비밀번호 입력 및 추가적인 본인 확인 절차를 거치도록 할 수 있습니다.</ListItem>
                        <ListItem>(5) 여러분의 계정을 타인이 무단으로 사용하는 것을 예방하기 위해서는, 타인이 여러분 계정의 비밀번호를 쉽게 알 수 없도록 여러분의 주기적인 관리가 중요합니다. 비밀번호 관리를 소홀히 하셔서 발생하는 불이익은 안타깝지만 프로젝트 팀이 책임질 수 없고 여러분께서 부담하실 수밖에 없습니다.</ListItem>
                    </List>

                    <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
                    ② 서비스 이용 제한
                    </Typography>

                    <List>
                        <ListItem>(1) 개별 서비스 이용 과정에서 관련 법령, 관련 약관 또는 운영정책 위반 사항이 발견된 경우, 해당 개별 서비스의 이용이 제한될 수 있습니다. 다만, 음란한 내용의 게시와 유포 및 사행성 도박 홍보 등 관련 법령에서 금지하는 명백한 불법행위나 긴급한 위험 또는 피해 차단이 요구되는 사안에 대해서는, 다른 이용자의 보호를 위해 통합서비스의 전체 이용이 일시적 또는 영구적으로 제한될 수도 있으며, BLY 통합서비스 약관에 동의하지 않은 이용자의 경우에는 BLY계정으로 이용하는 프로젝트 팀의 모든 서비스의 이용이 일시적 또는 영구적으로 제한될 수 있습니다.</ListItem>
                        <ListItem>(2) 위반 사항이 발견된 경우 다른 이용자가 문제 게시물을 볼 수 없도록 게시물의 노출이 제한되거나, 삭제될 수 있습니다. 또한, 지속적인 위반 활동 및 추가적인 피해를 방지하기 위하여 글 쓰기 기능 제한 및 게시물 미노출 등 해당 서비스 이용이 일부 또는 전부 제한될 수도 있습니다.</ListItem>
                        <ListItem>(3) 서비스 이용 제한은 한시적 제한에서 영구적 제한으로 단계적으로 제한되지만, 즉시 영구적으로 제한되는 경우도 있다는 점을 꼭 잊지 말아 주시기 바랍니다.</ListItem>                            
                    </List>
                    
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    5. 아동과 청소년 대상 성범죄에 대해서는 무관용 원칙을 적용합니다.
                    </Typography>

                    <Typography variant="body1" paragraph>프로젝트 팀은 유해한 인터넷 환경으로부터 아동과 청소년을 보호하는 것을 중요한 책무로 여기고 있습니다.</Typography>
                    <Typography variant="body1" paragraph>아동 및 청소년 대상 성범죄에 대해서는 무관용 원칙을 적용합니다.</Typography>
                    <Typography variant="body1" paragraph>이와 관련된 운영정책을 위반할 경우 누적 정도와 관계없이 즉시 해당 계정과 서비스 이용에 대하여 가장 강력한 제재를 적용하며, 필요시 수사기관의 사법적 대응과 연계하는 등 적극적 조치를 취할 것입니다.</Typography>
                    <Typography variant="body1" paragraph>아동과 청소년 대상 성범죄가 발생했거나 성범죄 발생 가능성이 높은 상황을 발견하셨다면 24시간 365일 운영되는 신고센터로 언제든지 저희에게 신고해 주십시오. 각 서비스의 ‘신고하기’ 기능을 활용해서도 제보하실 수 있습니다.</Typography>
                    <Typography variant="body1" paragraph>프로젝트 팀은 여러분의 제보를 접수하고 신속하게 필요한 조치를 취하겠습니다.</Typography>

                    <Typography variant="body1" paragraph>다음과 같은 아동・청소년 대상 성범죄 또는 성범죄 조장 행위는 물론 관련 콘텐츠를 이용하려는 적극적인 의사 표현까지 무관용 원칙 적용 대상에 해당합니다.</Typography>
                    <List>
                        <ListItem>① 아동・청소년 성착취물을 제작 및 제공하거나 광고・소개하는 행위</ListItem>
                        <ListItem>② 아동・청소년 성착취물임을 알면서도 소지하거나 이용하는 행위</ListItem>
                        <ListItem>③ 아동・청소년이 성착취물의 제작에 이용되도록 돕는 행위</ListItem>
                        <ListItem>④ 아동・청소년에게 음란물이나 성착취물을 제공하는 행위</ListItem>
                        <ListItem>⑤ 아동・청소년의 성을 매매하는 행위</ListItem>
                        <ListItem>⑥ 아동・청소년 대상 성범죄를 모의하거나 묘사하는 행위</ListItem>
                        <ListItem>⑦ 아동・청소년을 대상으로 한 그루밍(grooming, 길들이기) 행위</ListItem>
                        <ListItem>⑧ 아동・청소년의 과도한 성적 대상화</ListItem>
                        <ListItem>⑨ 그외 아동・청소년 대상 성범죄를 조장하는 행위</ListItem>
                        <ListItem>⑩ 아동・청소년 성착취물을 제작 및 제공하거나 광고・소개하는 행위</ListItem>
                    </List>

                    <Typography variant="body1" paragraph>프로젝트 팀은 다양한 기술과 정책을 통하여 아동・청소년 성범죄를 예방하도록 최선의 노력을 다하겠습니다.</Typography>
                    
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    6. 서비스 장기 미이용 처리 정책
                    </Typography>

                    <Typography variant="body1" paragraph>
                    이용자의 개인정보 보호를 위하여 일정 기간 서비스를 이용하지 않으면 아래와 같이 개인정보를 파기 또는 분리 보관 후 이용계약을 해지할 수 있습니다.
                    </Typography>
                </Paper>

            </Paper>
        </Container>
    );
};

export default OperationalPolicyPage;
