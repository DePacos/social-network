import { CircleUserRound } from 'lucide-react'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

import { PageLayout } from '@/app/pageLayout/PageLayout'
import { type User } from '@/app/types'
import { Pagination } from '@/pages/users/ui/Pagination'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Search } from '@/shared/ui'

import { useUsers } from '../model'
import { S } from './Users.styles.ts'

const Users = () => {
  const {
    currentPage,
    handleScrollToTop,
    handleSearch,
    observeOnLastItem,
    pageItems,
    setCurrentPage,
    term,
    triggerRef,
    users,
    usersContainerRef,
  } = useUsers()

  return (
    <PageLayout title="Users" image={dialogsBg}>
      <S.UsersContainer>
        <Search placeholder="Search users" callback={handleSearch} />
        <S.Users ref={usersContainerRef}>
          {users.items.length > 0 ? (
            users.items.map((user: User, i) => (
              <S.UserItem
                key={i}
                ref={observeOnLastItem(i) ? triggerRef : null}
              >
                <Link to={`/profile/${user.id}`}>
                  {user.photos.small ? (
                    <div className="wrap-img">
                      <img src={user.photos.large} alt="user-photo" />
                    </div>
                  ) : (
                    <div className="wrap-img">
                      <CircleUserRound size={120} strokeWidth={1} />
                    </div>
                  )}
                  <span>{user.name}</span>
                  <span>{user.followed ? 'followed' : 'no followed'}</span>
                  <span>{user.status}</span>
                </Link>
              </S.UserItem>
            ))
          ) : (
            <p>No users</p>
          )}
        </S.Users>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageItems={pageItems}
          total={users.totalCount}
          term={term}
          callback={handleScrollToTop}
        />
      </S.UsersContainer>
    </PageLayout>
  )
}

export default Users
