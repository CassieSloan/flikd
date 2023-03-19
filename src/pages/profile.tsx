import router from 'next/router';
import queryString from 'query-string';
import { FC, useCallback, useEffect, useState } from 'react';
import { getProfile } from '../apiHelpers/getProfile';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { Navigation } from '../components/common/Navigation';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';

type ProfileProps = {
  profileId: string;
};
type ProfileInfo = {
  id: string,
  userSince: string,
  username: string
}
/**
 * Render Profile component.
 */
const Profile: FC<ProfileProps> = () => {
  const [profileAuth, setProfileAuth] = useState<string | (string | null)[]>('')
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null | Promise<unknown>>(null)

  console.log('profileInfo', profileInfo?.data)
  const [loading, setLoading] = useState(false);
  console.log('loading', loading)

  useEffect(() => {
    setLoading(true)
    const parsed = queryString.parse(location.search);
    console.log('parsed', parsed)
    const {auth} = parsed
    console.log('auth', auth)
    if (auth) {
      setProfileAuth(auth);
    }
    router.replace('/profile', undefined, { shallow: true })
  }, []);

  const retrieveProfile = useCallback(async (profileAuth: string | (string | null)[]) => {
    const info = await getProfile(profileAuth);
    setProfileInfo(info)
  }, [])

  useEffect(() => {
    if (profileAuth) {
      retrieveProfile(profileAuth)
      setLoading(false);
    }
  }, [profileAuth, retrieveProfile]);

  return (
    <PageLayout>
      <Section>
        <Navigation />
        <h1>This is a profile page</h1>
        {loading && <LoadingSpinner />}
        {profileInfo && (
          <>
            <p>user since: {profileInfo?.data?.userSince}</p>
            <p>username: {profileInfo?.data?.username}</p>
            <p>id: {profileInfo?.data?.id}</p>
          </>
        )}
      </Section>
    </PageLayout>
  );
};
export default Profile;
